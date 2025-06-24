import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getActivity, getActivityDetail } from '../services/api';
import { Box, Card, CardContent, Divider, Typography } from '@mui/material';

const ActivityDetail = () => {
    const {id} = useParams();
    const [activity,setActivity] = useState(null);
    const [recommendation,setRecommendation] = useState(null);

    useEffect(()=>{
        const fetchActivityDetail = async()=>{
            try{
                let response = await getActivityDetail(id);
                setActivity(response.data);
                setRecommendation(response.data.recommendation); 
                response = await getActivity(response.data.activityId);
                setActivity(prev => ({
                    ...prev,
                    duration : response.data.duration,
                    caloriesBurned : response.data.caloriesBurned
                }));
            }catch(error){
                console.error(error);
            }
        }
        fetchActivityDetail();
    },[id])

    // const debug = ()=>{
    //     console.log(activity);
    //     console.log(recommendation);
    // };

    if(!activity){
        return <Typography>Loading...</Typography>
    }
  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 2 }}>
        {/* <button onClick={debug}>debug</button> */}
            <Card sx={{ mb: 2 }}>
                <CardContent>
                    <Typography variant="h5" gutterBottom>Activity Details</Typography>
                    <Typography>Type: {activity.activityType}</Typography>
                    <Typography>Duration: {activity.duration} minutes</Typography>
                    <Typography>Calories Burned: {activity.caloriesBurned}</Typography>
                    <Typography>Date: {new Date(activity.createdAt).toLocaleString()}</Typography>
                </CardContent>
            </Card>

            {recommendation && (
                <Card>
                    <CardContent>
                    <Typography variant="h5" gutterBottom>AI Recommendation</Typography>

                    {activity.recommendation.split('\n').map((section, index) => {
                        const [title, ...content] = section.split(':');
                        return (
                        <Box key={index} sx={{ mb: 2 }}>
                            <Typography variant="subtitle1" fontWeight="bold">
                            {title.trim()}
                            </Typography>
                            <Typography variant="body2">
                            {content.join(':').trim()}
                            </Typography>
                        </Box>
                        );
                    })}

                    <Divider sx={{ my: 2 }} />

                    {activity?.improvements?.length > 0 && (
                        <Box sx={{ mb: 2 }}>
                        <Typography variant="h6">Improvements</Typography>
                        {activity.improvements.map((improvement, index) => (
                            <Typography key={index} variant="body2" paragraph>
                            • {improvement}
                            </Typography>
                        ))}
                        </Box>
                    )}

                    {activity?.suggestions?.length > 0 && (
                        <>
                        <Divider sx={{ my: 2 }} />
                        <Box sx={{ mb: 2 }}>
                            <Typography variant="h6">Suggestions</Typography>
                            {activity.suggestions.map((suggestion, index) => (
                            <Typography key={index} variant="body2" paragraph>
                                • {suggestion}
                            </Typography>
                            ))}
                        </Box>
                        </>
                    )}

                    {activity?.safety?.length > 0 && (
                        <>
                        <Divider sx={{ my: 2 }} />
                        <Typography variant="h6">Safety Guidelines</Typography>
                        {activity.safety.map((safety, index) => (
                            <Typography key={index} variant="body2" paragraph>
                            • {safety}
                            </Typography>
                        ))}
                        </>
                    )}
                    </CardContent>
                </Card>
                )}

        </Box>
  )
}

export default ActivityDetail