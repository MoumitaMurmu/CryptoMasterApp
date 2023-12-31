import React from 'react'
import Button from "../../common/Button/Button";
import "./Main.css";
import { Link } from "react-router-dom";
import crypto from "../../../assets/crypto.png";
import { motion } from "framer-motion";
import Container from '@mui/material/Container';
import Grid2 from '@mui/material/Unstable_Grid2';
const Main = () => {
  return (
    <div className="home80">
      <Container maxWidth="lg">
        <Grid2 container spacing={2}>
          <Grid2 xs={12} sm={12} md={6} key={56}>
            <motion.h1 initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0 }} className="name"><span style={{color: 'blue'}}>Real-Time</span> Insights for Smart Traders.</motion.h1>
            <motion.p initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.2 }} className="para">Unleash your crypto journey. Real-time tracking, analysis, and market insights empower smart traders. Maximize profits, conquer the crypto realm, and achieve success with our robust platform. From novice to expert, our tools and knowledge maximize profits in the dynamic crypto world. Take control, unlock potential, and succeed with powerful real-time insights.</motion.p>
            <div className="button">
              <Link to="/coins">
                  <Button text={"Explore coins"} outlined={false} onClick={() => { }} />
                </Link>
            </div>
          </Grid2>
          <Grid2 xs={12} sm={12} md={6} key={76}>
            <motion.img alt="phone"
              src={crypto}
              className="crypto-icon"
              initial={{ y: -10 }}
              animate={{ y: 10 }}
              transition={{
                type: "smooth",
                repeatType: "mirror",
                duration: 2,
                repeat: Infinity,
              }}
            />
          </Grid2>
        </Grid2>
      </Container>
    </div>
  )
}

export default Main;