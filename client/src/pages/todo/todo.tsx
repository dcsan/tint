import React, { Component } from "react";
import ACTIONS from "../../redux/action";
import { connect } from "react-redux";

import {
  withStyles,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  IconButton,
  Grid,
  TextField,
  Button,
  FormControl
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const mapStateToProps = (state: any) => ({
  items: state.items
});

const mapDispatchToProps = (dispatch: any) => ({
  createItem: (item: any) => dispatch(ACTIONS.createItem(item)),
  deleteItem: (id: any) => dispatch(ACTIONS.deleteItem(id))
});

const styles = (theme: any) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752
  },
  demo: {
    // backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: `4px 0 2px`
  }
});

// type Item {}

type Props = {
  items: any[]
  classes: any
  createItem: any
  deleteItem: any
}

type State = {
  items: any[]
}

class ToDO extends Component<Props, State> {
  state: any = {
    item: ""
  };

  generate = () => {
    if (!this.props.items) {
      return<div>loading</div>
    }
    console.log('loaded')
    // debugger
    return this.props.items.map( (item:any) => (
      <ListItem key={item.id}>
        <ListItemText primary={item.description} />
        <ListItemSecondaryAction>
          <IconButton
            aria-label="Delete"
            onClick={this.handleDelete}
            value={item.id}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ));
  };

  handleSubmit = (event: any) => {
    console.log(this.state.item);
    // @ts-ignore
    this.setState({ item: "" });
    if (this.state.item !== "") {
      // add the item to the store
      this.props.createItem(this.state.item);
    }
    event.preventDefault();
  };

  handleDelete = (event: any) => {
    // delete the item from the store
    this.props.deleteItem(event.target.value);
  };

  handleChange = (event: any) => {
    // FIXME
    // @ts-ignore
    const name = event.target.name
    const value = event.target.value
    let obj = {}
    // @ts-ignore
    obj[name] = value
    console.log('set', name, value)
    this.setState(obj);
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div>
          <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
            <FormControl>
              <TextField
                label="New Task"
                id="margin-dense"
                value={this.state.item}
                className={classes.textField}
                margin="dense"
                name="item"
                onChange={this.handleChange}
              />
            </FormControl>
            <FormControl>
              <Button type='submit'>Add</Button>
            </FormControl>
          </form>
        </div>
        <div>
          <Grid item container justify="space-evenly" alignItems="center">
            <div className={classes.demo}>
              <List dense={false}>{this.generate()}</List>
            </div>
          </Grid>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ToDO));
