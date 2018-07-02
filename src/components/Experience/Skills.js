import React from "react";
import PropTypes from "prop-types";
import uuid from "uuid/v4";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const Skills = ({ skills, company }) => (
  <Grid container spacing={8}>
    <Grid item xs={12}>
      <Typography variant="body2">Skills Required</Typography>
    </Grid>
    {skills.map(skill => (
      <Grid key={uuid()} item xs={12} sm={4} md={4} lg={3}>
        <Chip label={skill} />
      </Grid>
    ))}
  </Grid>
);

Skills.propTypes = {
  company: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Skills;
