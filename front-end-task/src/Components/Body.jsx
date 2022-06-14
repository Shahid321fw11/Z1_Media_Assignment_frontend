import React from 'react';
import { styled } from '@mui/material/styles';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HomeIcon from '@mui/icons-material/Home';
import Typography from '@mui/material/Typography';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import AppsIcon from '@mui/icons-material/Apps';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { Paper } from '@mui/material';
import { Box } from '@mui/system';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";




const Body = () => {
    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }));
    return <>
        <div style={{ disply: 'flex' }}>
            <div style={{ float: 'left', width: '20%' }}>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <HomeIcon />
                    </IconButton>
                    <Typography display="block" >
                        Dashboard
                    </Typography>
                    <ExpandMore
                    // expand={expanded}
                    // onClick={handleExpandClick}
                    // aria-expanded={expanded}
                    // aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>

                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <AutoStoriesIcon />
                    </IconButton>
                    <Typography display="block" >
                        Pages
                    </Typography>
                    <ExpandMore>
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>

                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <AppsIcon />
                    </IconButton>
                    <Typography display="block" >
                        Applications
                    </Typography>
                    <ExpandMore>
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>

                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <WidgetsIcon />
                    </IconButton>
                    <Typography display="block" >
                        UI Component
                    </Typography>
                    <ExpandMore>
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <HomeIcon />
                    </IconButton>
                    <Typography display="block" >
                        Widges
                    </Typography>
                    <ExpandMore>
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <HomeIcon />
                    </IconButton>
                    <Typography display="block" >
                        Forms
                    </Typography>
                    <ExpandMore>
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <AppsIcon />
                    </IconButton>
                    <Typography display="block" >
                        Charts
                    </Typography>
                    <ExpandMore>
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
            </div>

            <Paper style={{ float: 'right', width: '80%', marginTop: '1rem' }}>
                <Box style={{}}>
                    <Card sx={{ width: "43%", backgroundColor: "#3f51b5", color: "white", display: 'flex', float: 'left', margin: '2rem' }}>
                        <CardContent>
                            <Typography sx={{ mb: 1.5 }}>Total Income</Typography>
                            <Typography variant="h5" component="div">
                                $ 579,000
                            </Typography>

                            <Typography variant="body2">
                                <br />
                                save 25%
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ width: "43%", backgroundColor: "#42a5f5", color: "white", display: 'flex', float: 'right', margin: '2rem' }}>
                        <CardContent>
                            <Typography sx={{ mb: 1.5 }}>Total Expence</Typography>
                            <Typography variant="h5" component="div">
                                $ 79,000
                            </Typography>

                            <Typography variant="body2">
                                <br />
                                save 25%
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
                <Box style={{}}>
                    <Card sx={{ width: "43%", backgroundColor: "#673ab7", color: "white", display: 'flex', float: 'left', margin: '2rem' }}>
                        <CardContent>
                            <Typography sx={{ mb: 1.5 }}>Cash On Hand</Typography>
                            <Typography variant="h5" component="div">
                                $ 92,000
                            </Typography>

                            <Typography variant="body2">
                                <br />
                                save 25%
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ width: "43%", backgroundColor: "#80cbc4", color: "white", display: 'flex', float: 'right', margin: '2rem' }}>
                        <CardContent>
                            <Typography sx={{ mb: 1.5 }}>Net Profit Margin</Typography>
                            <Typography variant="h5" component="div">
                                $ 179,000
                            </Typography>

                            <Typography variant="body2">
                                <br />
                                save 65%
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>

            </Paper>
        </div>

    </>
}

export default Body