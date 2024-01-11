import "./posts.css";
import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box } from '@mui/material';
import { MdLocationOn } from 'react-icons/md';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import { useNavigate } from "react-router-dom";

const PostCard = ({title, address}) => {
    const navigate = useNavigate();
    return (
        <Card sx={{ display: 'flex', maxWidth: '80%', height: 'auto',  maxHeight: '30%' ,my: 2 }}>
        <CardMedia
          component="img"
          sx={{ maxWidth: '40%', objectFit: 'cover' }}
          image={require('../assets/background-landing.jpg')} 
          alt="apt"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, m: 2, width: 600 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={{fontFamily: "Yeseva One, serif"}}>
              {title}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}> {/* Added this Box to align the icon with the text */}
              <MdLocationOn /> {/* Icon component */}
              <Typography variant="body2" color="text.secondary" sx={{ ml: 1, fontFamily: "Yeseva One, serif"}} > {/* Added margin left */}
                  {address}
              </Typography>
              </Box>
          </CardContent>
          <CardActions>
            <Button size="small" sx={{color: 'black', fontFamily: '"Yeseva One", serif'}} onClick={() => navigate("/rental-details")}>Vezi detalii</Button>
            </CardActions>
        </Box>
      </Card>
    );
}

const Posts = () => {
    return (
      <div className="backgroundStyle">
      <div className="pageViewPosts">
        <PostCard
            title="Apartament Militari 2 camere"
            address="Drumul Osiei 18-28">
        </PostCard>

      </div>
      </div>
    );
}

export default Posts;