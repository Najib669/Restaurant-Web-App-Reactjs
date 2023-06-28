import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
          Welcome to the fascinating world of Tunisian food and culture.
          Situated at the crossroads of civilizations, Tunisia boasts a diverse
          tapestry of traditions and flavors that will tantalize your senses.
          From the moment you step foot in this enchanting country, you'll be
          captivated by its rich historical heritage, stunning landscapes, and
          warm hospitality. Explore the vibrant streets filled with tantalizing
          aromas, indulge in flavorful spices like harissa and cumin, and savor
          signature dishes like couscous and brik. Immerse yourself in the art
          of tea and coffee, join in the joyous celebrations and festivals, and
          discover the vibrant music and dance that embody the spirit of
          Tunisia. Whether you're strolling through ancient ruins or enjoying
          the bustling markets, Tunisia promises an unforgettable journey of
          cultural immersion and culinary delights. So, come and experience the
          magic of Tunisia – a true feast for the senses.
        </p>
        <br />
        <p>
          With every bite of traditional Tunisian cuisine, you'll embark on a
          culinary adventure that showcases the country's unique blend of
          flavors and influences. Begin your day with a hearty Tunisian
          breakfast, indulging in fluffy pancakes, chickpea soup, and delicate
          pastries. As you wander the streets, don't miss the chance to sample
          street food delicacies like fricassé and makroudh, bursting with
          savory fillings and tantalizing spices. Seafood lovers will be
          delighted by the abundance of fresh catches, from grilled prawns to
          aromatic seafood stews. And no meal is complete without a sweet
          ending, where baklava, tarte au citron, and honey-soaked yoyo sweets
          await to satisfy your sweet tooth. <br></br> Beyond the culinary
          realm, Tunisia's rich cultural tapestry is woven with celebrations,
          music, and traditions that showcase the country's vibrant spirit.
          Immerse yourself in the festivities of Eid al-Fitr and Eid al-Adha,
          where streets come alive with colorful decorations and joyful
          gatherings. The rhythmic beats of Malouf and Mezoued music will
          enthrall you, while traditional dances showcase the country's diverse
          cultural heritage. Engage with locals and learn about traditional
          crafts such as pottery, ceramics, and intricate carpet weaving, all of
          which reflect Tunisia's deep-rooted artistic traditions.
          <br></br>
          While exploring Tunisia, you'll encounter the genuine warmth and
          hospitality of its people, who take pride in sharing their customs and
          traditions with visitors. Experience the customary greetings, respect
          local dress codes, and embrace the opportunity to partake in henna
          ceremonies and the rejuvenating rituals of a traditional hammam.
          <br></br>
          Tunisia's captivating beauty extends beyond its cultural heritage,
          with iconic sites like the ancient city of Carthage, the bustling
          medina of Tunis, and the vast Sahara Desert, offering endless
          opportunities for adventure and exploration.
          <br></br>
          In conclusion, Tunisia is a country that will leave an indelible mark
          on your senses. Its delectable cuisine, vibrant celebrations, and rich
          cultural traditions create an immersive experience that will stay with
          you long after your visit. So, let your taste buds and curiosity guide
          you as you embark on a journey of discovery through Tunisia's
          fascinating food and culture. Get ready to be enchanted by the
          flavors, traditions, and warm hospitality that make Tunisia truly
          unique.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
