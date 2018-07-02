import React from "react";
import uuid from "uuid/v4";
import Grid from "@material-ui/core/Grid";

import Page from "../Page";
import Job from "./Job";
import { jobs } from "./constants";

const Experience = () => (
  <Page headline="Experience" skinny>
    <Grid container spacing={24}>
      {jobs.map(job => (
        <Grid key={uuid()} item xs={12}>
          <Job key={job.id} job={job} />
        </Grid>
      ))}
    </Grid>
  </Page>
);

export default Experience;
