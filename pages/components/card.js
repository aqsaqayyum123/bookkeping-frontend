import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { sizing } from '@material-ui/system';
const bull = (
  <Box component="span" sx={{ display: 'inline-block', mx: '2px' }}>
    •
  </Box>
);

// card: {
//   width: '50%';
// }

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        You’re all settled up. Awesome!
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        To add a new expense, click the orange “Add an expense” button.
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    {/* <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions> */}
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}

//import Grid from '@material-ui/core/Grid';
// import like this

// export default function MediaCard(props) {
//   const { classes } = props;
//   <Grid container spacing={0} direction="column" alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
//     <Grid item xs={3}>
//       <Card>// card content</Card>
//     </Grid>
//   </Grid>;
// }
