import * as React from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    expand: {
        transform: 'rotate(0deg)',
        fontSize: "1.5rem",
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));

export default function CollapsibleCard(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const {title, children} = props

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card>
            <CardActions disableSpacing>
                <Typography variant="h6" >{title}</Typography>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    {children}
                </CardContent>
            </Collapse>
        </Card>
    )
}

  
CollapsibleCard.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired
  };