import fetch from "node-fetch";
import dotenv from 'dotenv'
import express from 'express'
const router = express.Router()

dotenv.config();
router.get("/", (req, res) => {
  res.render("index", {
    city: null,
    description: null,
    icon: null,
    temp: null,
  });
});

router.post("/", async (req, res) => {
  const city = req.body.city;
  
  const url_api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;
  try {
    await fetch(url_api)
      .then((res) => res.json())
      .then((data) => {
        if(data.message === 'city not found'){
          res.render('index', {
            city: data.message,
            description: null,
            icon: null,
            temp: null
          })
        }else{
          const city = data.name 
          const description = data.weather[0].description
          const temp = data.main.temp 
          const icon = data.weather[0].icon
          res.render('index', {
            city,
            description,
            icon,
            temp
          })
        }
      });
  }catch{
    res.render("index", {
      city: "Something went wrong",
      description: null,
      icon: null,
      temp: null,
    });
  }


});
//module.exports = router;
export default router
