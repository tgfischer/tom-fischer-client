import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Page from "../Page";
import Grades from "./Grades";
import { transcript } from "./constants";

const Education = () => (
  <Page headline="Education" skinny>
    <Grid container spacing={24}>
      <Grid item xs={12}>
        <Typography variant="title">Western University</Typography>
        <Typography variant="body2">Bachelor of Engineering Science</Typography>
        <Typography variant="body1">Software Engineering</Typography>
        <Typography variant="caption">Graduated with honours</Typography>
      </Grid>
      {transcript.map(({ title, courses }) => (
        <Grid item key={title} xs={12}>
          <Grades title={title} courses={courses} />
        </Grid>
      ))}
    </Grid>
  </Page>
);

export default Education;
