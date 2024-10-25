import Card from './card/Card';

const Wrapper = () => {
  return (
    <>
      <Card />
    </>
  );
};

export default Wrapper;

// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { GreenCardData } from '../data/data';

// const Wrapper = () => {
//   return (
//     <>
//       {GreenCardData.map((item) => (
//         <Card
//           sx={{
//             maxWidth: 1345,
//             margin: '0 auto',
//             marginTop: '80px',
//             borderRadius: 3,
//             height: 'auto', // Поменял на auto, чтобы карточка подстраивалась под контент
//             overflow: 'hidden', // Чтобы карточка не растягивалась больше контента
//           }}
//           key={item.id}
//         >
//           {/* Главное изображение (succsesImg) */}
//           <CardMedia
//             sx={{ height: 650 }} // Зафиксированная высота первого изображения
//             image={item.succsesImg}
//             title="success image"
//           />

//           {/* Второе изображение (fillingImg), с более разумной минимальной высотой */}
//           <CardMedia
//             sx={{
//               minHeight: 400, // Больше не 5000, а разумное значение
//               borderTop: '3px solid red',
//               objectFit: 'cover', // Это предотвратит искажение изображения
//             }}
//             image={item.fillingImg}
//             title="filling image"
//           />

//           {/* Контент карточки */}
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               GreenCardText
//             </Typography>
//             <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//               {item.text}
//             </Typography>
//             <Typography sx={{ fontSize: 54, color: 'red', fontWeight: 'bold' }}>
//               <span style={{ color: 'black' }}>name:</span> {item.name}
//             </Typography>
//             <Typography sx={{ fontSize: 54, color: 'red', fontWeight: 'bold' }}>
//               <span style={{ color: 'black' }}>number:</span> {item.number}
//             </Typography>
//           </CardContent>
//           <CardActions></CardActions>
//         </Card>
//       ))}
//     </>
//   );
// };

// export default Wrapper;
