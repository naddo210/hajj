import { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  Box,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

const AdminVideos = () => {
  const [videos, setVideos] = useState([]);
  const [open, setOpen] = useState(false);
  const [newVideo, setNewVideo] = useState({
    title: '',
    video: null
  });

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
<<<<<<< HEAD
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/videos`);
=======
      const response = await axios.get('https://hajj-bv3l.onrender.com/api/videos');
>>>>>>> 1ff2f6ab9dc106f738410001b780b8e2c3d14fc0
      setVideos(response.data);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', newVideo.title);
    formData.append('video', newVideo.video);

    try {
<<<<<<< HEAD
      await axios.post(`${import.meta.env.VITE_API_URL}/videos`, formData, {
=======
      await axios.post('https://hajj-bv3l.onrender.com/api/videos', formData, {
>>>>>>> 1ff2f6ab9dc106f738410001b780b8e2c3d14fc0
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setOpen(false);
      fetchVideos();
      setNewVideo({ title: '', video: null });
    } catch (error) {
      console.error('Error uploading video:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
<<<<<<< HEAD
      await axios.delete(`${import.meta.env.VITE_API_URL}/videos/${id}`);
=======
      await axios.delete(`https://hajj-bv3l.onrender.com/api/videos/${id}`);
>>>>>>> 1ff2f6ab9dc106f738410001b780b8e2c3d14fc0
      fetchVideos();
    } catch (error) {
      console.error('Error deleting video:', error);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 2, sm: 3, md: 4 } }}>
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'stretch', sm: 'center' },
          justifyContent: 'space-between',
          mb: { xs: 2, sm: 4 },
          gap: 2
        }}
      >
        <Typography 
          variant="h4" 
          sx={{ 
            fontSize: { xs: '1.5rem', sm: '2rem' },
            textAlign: { xs: 'center', sm: 'left' }
          }}
        >
          Manage Videos
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => setOpen(true)}
          sx={{ 
            width: { xs: '100%', sm: 'auto' }
          }}
        >
          Upload New Video
        </Button>
      </Box>

      <Grid container spacing={{ xs: 2, sm: 3 }}>
        {videos.map((video) => (
          <Grid item xs={12} sm={6} md={4} key={video._id}>
            <Card sx={{ height: '100%' }}>
              <Box sx={{ position: 'relative', width: '100%', pt: '56.25%' }}>
                <video
                  controls
                  style={{ width: '100%', height: 200, objectFit: 'cover' }}
                  src={`${import.meta.env.VITE_API_URL}/${video.videoUrl}`}
                />
              </Box>
              <CardContent sx={{ 
                p: 2,
                '&:last-child': { pb: 2 }
              }}>
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: 1
                }}>
                  <Typography 
                    variant="h6"
                    sx={{ 
                      fontSize: { xs: '1rem', sm: '1.25rem' },
                      wordBreak: 'break-word',
                      flex: 1
                    }}
                  >
                    {video.title}
                  </Typography>
                  <IconButton 
                    onClick={() => handleDelete(video._id)} 
                    color="error"
                    sx={{ 
                      p: { xs: 0.5, sm: 1 }
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog 
        open={open} 
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="sm"
        sx={{
          '& .MuiDialog-paper': {
            margin: { xs: 2, sm: 3 },
            width: { xs: 'calc(100% - 32px)', sm: 'auto' }
          }
        }}
      >
        <DialogTitle sx={{ 
          fontSize: { xs: '1.25rem', sm: '1.5rem' },
          pt: { xs: 2, sm: 3 }
        }}>
          Upload New Video
        </DialogTitle>
        <DialogContent sx={{ p: { xs: 2, sm: 3 } }}>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              fullWidth
              label="Title"
              value={newVideo.title}
              onChange={(e) => setNewVideo({ ...newVideo, title: e.target.value })}
              margin="normal"
              sx={{ mb: 2 }}
            />
            <input
              type="file"
              accept="video/*"
              onChange={(e) => setNewVideo({ ...newVideo, video: e.target.files[0] })}
              style={{ 
                width: '100%',
                marginTop: '8px'
              }}
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ 
          p: { xs: 2, sm: 3 },
          flexDirection: { xs: 'column', sm: 'row' },
          gap: { xs: 1, sm: 2 }
        }}>
          <Button 
            onClick={() => setOpen(false)}
            fullWidth={window.innerWidth < 600}
          >
            Cancel
          </Button>
          <Button 
            onClick={handleSubmit} 
            variant="contained"
            fullWidth={window.innerWidth < 600}
          >
            Upload
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default AdminVideos;
