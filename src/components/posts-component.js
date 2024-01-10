import "./posts.css";
import React, { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box } from '@mui/material';
import { MdLocationOn } from 'react-icons/md';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../config";

const PostCard = ({title, address, images}) => {   
    const navigate = useNavigate();
    const imageUrl = images && images.length > 0 ? images[0] : '../assets/background-landing.jpg';

    return (
      <Card
        sx={{ 
          display: 'flex', 
          maxWidth: '130%', 
          height: 'auto', 
          my: 2 
        }}>
        <CardMedia
          component="img"
          sx={{ width: 350, height: 180, objectFit: 'cover' }}
          image={imageUrl} 
          alt="apt"
        />
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            flexGrow: 1, 
            m: 2, 
            width: 600 
          }}>
          <CardContent>
            <Typography
              gutterBottom 
              variant="h5" 
              component="div" 
              style={{fontFamily: "Yeseva One, serif"}}
              >
              {title}
            </Typography>
            <Box 
              sx={{ 
                display: 'flex', 
                alignItems: 'center' 
              }}> 
              <MdLocationOn /> 
              <Typography 
                variant="body2" 
                color="text.secondary" 
                sx={{ 
                  ml: 1, 
                  fontFamily: "Yeseva One, serif"
                }}>   
                {address}
              </Typography>
              </Box>
          </CardContent>
          <CardActions>
            <Button 
              size="small" 
              sx={{
                color: 'black', 
                fontFamily: '"Yeseva One", serif'
              }} 
              onClick={() => navigate("/rental-details")}>
              Vezi detalii
            </Button>
            </CardActions>
        </Box>
      </Card>
    );
}

const Posts = () => {
  const [posts, setPosts] = useState([]); // State to hold the posts

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${config.backendApiUrl}/api/posts`);
        setPosts(response.data); // Assuming response.data is an array of posts
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="pageView">
      {posts.map((post, index) => (
        <PostCard
          key={index} // Ideally, use a unique id from the post instead of index
          title={post.title}
          address={post.address.formattedAddress}
          images={post.images}>
        </PostCard>
      ))}
    </div>
  );
}


export default Posts;