import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { GreenCardData } from '../data/data';

const Wrapper = () => {
  return (
    <>
      {GreenCardData.map((item) => (
        <Card
          sx={{
            maxWidth: 1345,
            margin: '0 auto',
            marginTop: '80px',
            borderRadius: 3,
          }}
          key={item.id}
        >
          <CardMedia
            sx={{ minHeight: 650 }}
            image={item.src}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              GreenCardText
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {item.text}
            </Typography>
            <Typography sx={{ fontSize: 54, color: 'red', fontWeight: 'bold' }}>
              <span style={{ color: 'black' }}>name:</span> {item.name}
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      ))}
    </>
  );
};

export default Wrapper;
