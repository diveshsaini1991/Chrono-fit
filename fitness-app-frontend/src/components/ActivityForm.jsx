import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import { addActivity } from '../services/api'


const ActivityForm = ({onActivityAdded}) => {
    
    const [activity, setActivity] = useState({
        type: "RUNNING",
        duration: "",
        caloriesBurned: "",
        additionalMetrics: {}
    })

    const handleSubmit = async(e)=>{
        e.preventDefault()
        try{
            await addActivity(activity);
            onActivityAdded();
            setActivity({ type: "RUNNING", duration: "", caloriesBurned: ""})
        }catch(error){
            console.error(error);
        }
    }
    
  return (
    <Box component="form" sx={{mb: 4}} onSubmit={handleSubmit}>
        <FormControl fullWidth sx={{mb:2}}>
            <InputLabel>Activity Type</InputLabel>
            <Select
                value={activity.type}
                onChange={(e)=>setActivity({...activity,type:e.target.value})}>
                    <MenuItem value="RUNNING">Running</MenuItem>
                    <MenuItem value="WALKING">Walking</MenuItem>
                    <MenuItem value="CYCLING">Cycling</MenuItem>
                    <MenuItem value="OTHER">Other</MenuItem>
            </Select>
            </FormControl>
            <TextField 
                fullWidth
                sx={{mb:2}}
                type='number'
                label = "Duration (Mins)"
                value={activity.duration}
                onChange={(e)=>setActivity({...activity,duration:e.target.value})}/>

            <TextField 
                fullWidth
                sx={{mb:2}}
                type='number'
                label = "Calories Burned"
                value={activity.caloriesBurned}
                onChange={(e)=>setActivity({...activity,caloriesBurned:e.target.value})}/>

                <Button type="submit" variant="contained">Add Activity</Button>
    </Box>
  )
}

export default ActivityForm