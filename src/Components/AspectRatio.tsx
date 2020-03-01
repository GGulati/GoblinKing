import * as React from "react"
import { makeStyles } from '@material-ui/core/styles';

interface AspectRatioProps {
  children?: any
  ratio: number
}

const useStyles = makeStyles({
  outerWrapper: (props: AspectRatioProps) => ({
    position: 'relative',
    width: '100%',
    height: 0,
    paddingBottom: ((1 / props.ratio) * 100).toString() + '%',
  }),
  innerWrapper: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  }
});

function AspectRatio(props: AspectRatioProps) {
  const classes = useStyles(props);

  return (
    <div className={classes.outerWrapper}>
      <div className={classes.innerWrapper}>
        {props.children}
      </div>
    </div>
  );
}

export default AspectRatio