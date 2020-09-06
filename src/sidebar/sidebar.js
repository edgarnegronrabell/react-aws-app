import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItemComponent from '../sidebaritem/sidebar-item';

class SidebarComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      addingNote: false,
      title: null
    }
  }

  render() {

    const { notes, classes, selectedNoteIndex } = this.props;

    if (notes) {
      return (
        <section className={classes.sidebarContainer}>
          <Button
              onClick={this.newNoteBtnClick}
              className={classes.newNoteBtn}> 
              { !this.state.addingNote ? 'New Note' : 'Cancel' } 
          </Button>
          {
            this.state.addingNote ? 
            <div> 
              <input 
                type='text'
                className={classes.newNoteInput}
                placeholder='Enter note title'
                onKeyUp={(e) => this.updateTitle(e.target.value)}
              > 
              </input>
              <Button
                className={classes.newNoteSubmitBtn}
                onClick={this.newNote}
              > 
              Submit Note
              </Button>
            </div> :
            null
          }
          <List> 
            {
              notes.map((_note, _index) => {
                return(
                  <React.Fragment key={_index}>
                    <SidebarItemComponent
                      _note={_note}
                      _index={_index}
                      selectedNoteIndex={selectedNoteIndex}
                      selectNote={this.selectNote}
                      deleteNote={this.deleteNote}
                    > 
                    </SidebarItemComponent>
                    <Divider></Divider>
                  </React.Fragment>
                )
              })
            }
          </List>
      </section>
      )
    }
    else {
      return (<div></div>)
    }
  }

  newNoteBtnClick = () => {
    this.setState({ title: null, addingNote: !this.state.addingNote })
  }
  updateTitle = (text) => {
    this.setState({ title: text })
  }
  newNote = () => {
    this.props.newNote(this.state.title)
    this.setState({ title: null, addingNote: false })
  }
  selectNote = (note, index) => this.props.selectNote(note, index)
  deletetNote = (note) => this.props.deleteNote(note)
}

export default withStyles(styles)(SidebarComponent);
