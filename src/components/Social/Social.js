import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { motion, useAnimation } from "framer-motion";
import { LinkedIn, GitHub, Email } from "@material-ui/icons";
import IconBtn from "../IconBtn";
import DarkModeSwitcher from "../DarkModeSwitcher";
import loaderContext from "../../contexts/loaderContext";

const Social = ({ mobile }) => {
    const classes = useStyles();
    const { isLoading } = useContext(loaderContext);
    const controls = useAnimation();

    useEffect(() => {
        if (!isLoading) {
            controls.start(i=>({
                opacity: 1,
                y: 0,
                transition: {
                    delay: 1.8+(i*0.1),
                },
            }));
        } else {
            controls.start({ opacity: 0, y: 0 });
        }
    }, [isLoading, controls]);

    if (mobile) {
        return (
            <div className={classes.mobileWrapper}>
                <a href="https://github.com/hrutugandha" rel="noreferrer">
                <IconBtn icon={GitHub} m={1} />
                </a>
                <a href="https://www.linkedin.com/in/hrutugandha-n-32735219b/"  rel="noreferrer" target="_blank">
                    <IconBtn icon={LinkedIn} m={1} />
                    </a>
                    <a href="mailto:hrutunishi19@gmail.com" rel="noreferrer" target="_blank">
                    <IconBtn icon={Email} m={1} />
                    </a>
            </div>
        );
    } else {
        return (
            <motion.div className={classes.wrapper}>
                <motion.div animate={controls} custom={0}>
                    <a href="https://github.com/hrutugandha" rel="noreferrer" target="_blank">
                    <IconBtn icon={GitHub} m={1} />
                    </a>
                </motion.div>
                <motion.div animate={controls} custom={2}>
                    <a href="https://www.linkedin.com/in/hrutugandha-n-32735219b/"  rel="noreferrer" target="_blank">
                    <IconBtn icon={LinkedIn} m={1} />
                    </a>
                </motion.div>
                <motion.div animate={controls} custom={3}>
                    <a href="mailto:hrutunishi19@gmail.com" rel="noreferrer" target="_blank">
                    <IconBtn icon={Email} m={1} />
                    </a>
                </motion.div>
                <motion.div animate={controls} custom={4}>
                    <DarkModeSwitcher />
                </motion.div>
            </motion.div>
        );
    }
};

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        position: "fixed",
        bottom: 0,
        right: 0,
        padding: theme.spacing(2),
        zIndex: 100,
    },
    mobileWrapper: {
        display: "flex",
    },
}));

export default Social;
