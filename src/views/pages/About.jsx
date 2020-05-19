import React from "react";
import { Typography, Grid, Box } from "@material-ui/core";
const About = (props) => {
  const { className } = props;

  return (
    <div className={className}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="left">
            <Typography variant="h3">About</Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="left">
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              iaculis volutpat interdum. Pellentesque venenatis libero ut nunc
              bibendum, eget convallis turpis aliquet. Curabitur ultrices eu
              justo a mollis. Phasellus et turpis a dolor sodales imperdiet.
              Nunc quis bibendum elit. Praesent eu ligula at nisi fringilla
              pretium ac non massa. Duis at sollicitudin risus. Sed pellentesque
              pulvinar purus nec suscipit. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae; Nulla at
              purus hendrerit, pretium mi ac, ultrices nibh. Sed tristique urna
              in mi scelerisque, ac finibus lacus laoreet. Aliquam consectetur
              ornare nibh eu sollicitudin. Duis elit est, porttitor eget gravida
              in, egestas vitae ante. Ut suscipit elementum risus sit amet
              bibendum. Nam varius volutpat fringilla. Sed at tortor ac felis
              semper ullamcorper. Morbi quis ultrices odio, nec viverra augue.
              Integer arcu turpis, sodales vel elementum in, dignissim
              scelerisque elit. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Aenean sagittis aliquam lacus, in fermentum
              sapien aliquam ut. Morbi nec maximus nisl, at laoreet tellus.
              Nullam congue elementum nisl, vel tincidunt nisi dignissim ut. In
              accumsan eu dui at pellentesque. Fusce pulvinar quam ut ipsum
              pharetra fringilla. Sed accumsan leo non sem aliquam, eget
              tincidunt turpis cursus. Maecenas malesuada, tellus non molestie
              auctor, velit quam vestibulum arcu, in ultricies erat nisi ut
              felis. Cras ac lobortis orci, finibus pharetra arcu. Nulla egestas
              a odio non maximus. Sed consectetur dapibus libero eu interdum.
              Mauris eu mi vel est suscipit aliquet eu eu mauris. Curabitur
              rutrum ligula nec massa commodo tincidunt. Vivamus at turpis
              euismod, sollicitudin mauris porta, molestie velit. Curabitur ut
              vulputate lacus, non tincidunt leo. Duis ac lacus ex. Aliquam
              lobortis placerat sem non convallis. Pellentesque venenatis mattis
              metus, vel feugiat eros ultricies in. Maecenas vehicula metus
              elit, at faucibus nunc luctus a. Ut cursus ante eget nunc accumsan
              sodales. Praesent blandit dui quis nunc ornare, quis sagittis
              augue lobortis. Mauris mattis venenatis dolor, quis posuere eros
              consequat et. Praesent vitae massa nisl. Ut id eleifend arcu.
              Curabitur ut tincidunt libero. In hac habitasse platea dictumst.
              Phasellus egestas leo id enim volutpat gravida. In ac dolor
              maximus, sodales tellus vel, feugiat metus. Maecenas fermentum
              lorem in est sodales efficitur. Proin tortor odio, egestas at
              nulla et, volutpat scelerisque diam. Curabitur sodales ut sem ut
              lacinia. Praesent urna risus, egestas eu odio eu, mollis pharetra
              eros. Duis at orci sed felis ullamcorper tristique. Curabitur
              consequat nibh laoreet dui vulputate luctus. Praesent eu odio
              mauris. Integer sagittis faucibus arcu, eu interdum quam tempus
              ac. Aliquam tincidunt justo at orci aliquam elementum. Nam
              ultricies nunc sapien, sed ullamcorper purus lobortis quis. Ut at
              ex turpis.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
