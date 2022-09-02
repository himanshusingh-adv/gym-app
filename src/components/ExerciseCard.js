import React, { lazy } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            fontSize: "14px",
            borderRadius: "20px",
            color: "#fff",
            background: "#ffa9a9",
            textTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
        <Button
          sx={{
            ml: "21px",
            fontSize: "14px",
            borderRadius: "20px",
            color: "#fff",
            background: "#fcc757",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>
      </Stack>
      <Typography
        sx={{
          color: "#000",
          ml: "21px",
          fontWeight: "bold",
          textTransform: "capitalize",
          pb: "10px",
        }}
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
