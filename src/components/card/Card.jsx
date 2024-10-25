import { styled } from '@mui/material';
import { GreenCardData } from '../../data/data';
import { TbSelect } from 'react-icons/tb';
import { useState } from 'react';

const Card = () => {
  const [visibility, setVisibility] = useState({});

  const handleVisibility = (id) => {
    setVisibility((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <Container>
      <StyledBox>
        <ContentBox>
          {GreenCardData.map((item) => (
            <SelectStyle key={item.id}>
              <p className="select" onClick={() => handleVisibility(item.id)}>
                {item.id} {item.name}
                <TbSelect style={{ textAlign: 'end' }} />
              </p>
              {visibility[item.id] && (
                <CardStyle>
                  <Contacts>
                    <p>
                      Аты: <span>{item.name}</span>
                    </p>
                    <p>
                      Номери: <span>{item.number}</span>
                    </p>
                    <p>
                      id: <span>{item.id}</span>
                    </p>
                  </Contacts>
                  <ImgSuccses>
                    <img src={item.succsesImg} alt="succsesImg" />
                  </ImgSuccses>
                  <ImgFilling>
                    <img src={item.fillingImg} alt="fillingImg" />
                  </ImgFilling>
                  <FillingImgSecond>
                    <img src={item.fillingImgSecond} alt="fillingImgSecond" />
                  </FillingImgSecond>
                  <FillingImgThird>
                    <img src={item.fillingImgThird} alt="fillingImgThird" />
                  </FillingImgThird>
                </CardStyle>
              )}
            </SelectStyle>
          ))}
        </ContentBox>
      </StyledBox>
    </Container>
  );
};

export default Card;

const Container = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
}));

const StyledBox = styled('div')(() => ({
  width: '100%',
  maxWidth: '1440px',
  display: 'flex',
  justifyContent: 'center',
}));

const ContentBox = styled('div')(() => ({
  width: '100%',
  maxWidth: '1300px',
  display: 'flex',
  flexDirection: 'column',
}));

const SelectStyle = styled('div')(() => ({
  '& .select': {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: 22,
    marginBottom: 5,
    cursor: 'pointer',
  },
}));

const CardStyle = styled('div')(() => ({
  width: '100%',
  minWidth: 1300,
  height: '100%',
  marginBottom: 80,
  boxShadow: '1px 1px 5px 1px rgba(0,0,0,0.1)',
  borderRadius: '20px',
  display: 'flex',
  flexDirection: 'column',
}));

const ImgSuccses = styled('div')(() => ({
  marginBottom: 120,
  '& img': {
    width: '100%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: '100%',
  },
}));

const ImgFilling = styled('div')(() => ({
  width: '100%',
  height: '100%',
  '& img': {
    width: '100%',
    height: '100%',
  },
}));

const FillingImgSecond = styled('div')(() => ({
  width: '100%',
  height: '100%',
  marginTop: 60,
  '& img': {
    width: '100%',
    height: '100%',
  },
}));

const FillingImgThird = styled('div')(() => ({
  width: '100%',
  height: '100%',
  marginTop: 60,
  '& img': {
    width: '100%',
    height: '100%',
  },
}));

const Contacts = styled('div')(() => ({
  fontSize: 55,
  fontWeight: 700,
  marginTop: 100,
  marginBottom: 60,
  marginLeft: 60,
  '& p': {
    color: 'red',
    '& span': {
      color: 'black',
    },
  },
}));
