// modules/Home.js
import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Dropzone from 'react-dropzone';
import ButtonAppBar from '../components/titlebar';

const styles = theme => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    minWidth: 0,
  },
  toolbar: theme.mixins.toolbar,
});

class Accept extends React.Component {
  constructor() {
    super()
    this.state = {
      accepted: [],
      rejected: []
    }
  }

  render() {
    return (
      <section>
        <div className="dropzone">
          <Dropzone
            accept="text/csv"
            onDrop={(accepted, rejected) => {
              this.setState({ accepted, rejected }); }
            }
            style={{
              margin: '20px auto',
              width: '300px',
              height: '200px',
              padding: '15px',
              borderWidth: '2px',
              borderColor: 'rgb(102, 102, 102)',
              borderStyle: 'dashed',
              borderRadius: '5px'}}>
            <a className="active">
              Drag and drop your files here to get started, or click to select
              files to upload.</a>
          </Dropzone>
        </div>
        <aside>
          <h2>Accepted files</h2>
          <ul>
            {
              this.state.accepted.map(f => 
                <li key={f.name}>{f.name} - {f.size} bytes</li>)
            }
          </ul>
          <h2>Rejected files</h2>
          <ul>
            {
              this.state.rejected.map(f => 
                <li key={f.name}>{f.name} - {f.size} bytes</li>)
            }
          </ul>
        </aside>
      </section>
    );
  }
}

function Home(props) {
  const { classes } = props;

  return (
    <div>
      <ButtonAppBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />

        <div className={classes.uploader}>
          <Accept />
        </div>
      </main>
    </div>
  );
}

export default withStyles(styles)(Home);
