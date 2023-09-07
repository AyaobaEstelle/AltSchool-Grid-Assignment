import Grid from './Grid';

// solve the css, range utility and Grid component 

function App() {
  return (
    <div className='grid-wrapper'>
    <Grid
      numRows={4}
      numCols={2}
    />
    </div>
  );
}

export default App;