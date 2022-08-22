/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "../components/feature-card-column";
import Performance from "../assets/key-feature/performance.svg";
import Partnership from "../assets/key-feature/partnership.svg";
import Subscription from "../assets/key-feature/subscription.svg";
import Support from "../assets/key-feature/support.svg";

const data = [
    {
        id: 1,
        imgSrc: Performance,
        altText: "Feature-rich layer 2 functions",
        title: "Feature-rich layer 2 functions",
        text: "It provides triple authentication, multi-step authentication, loop detection and ring protocol",
    },
    {
        id: 2,
        imgSrc: Partnership,
        altText: "High Load Performance",
        title: "High Load Performance",
        text: "High-performance network authentication enables smooth authentication even with more robust 2048-bit SSL.",
    },
    {
        id: 3,
        imgSrc: Subscription,
        altText: "Good Port Density",
        title: "Good Port Density",
        text: "with its high 10G port density, accelerates data processing and optimizes usage of server resource.",
    },
    {
        id: 4,
        imgSrc: Support,
        altText: "Virtual Redundant System",
        title: "Virtual Redundant System",
        text: "Network Partition enables configuration of a highly-secured virtual network and achieves redundancy of a core switch.",
    },
];

export default function KeyFeature() {
    return (
        <section sx={{ variant: "section.keyFeature" }} id='feature'>
            <Container>
                <SectionHeader slogan='Whats the function' title='Meet the features of Arch Armor' />

                <Grid sx={styles.grid}>
                    {data.map(item => (
                        <FeatureCardColumn
                            key={item.id}
                            src={item.imgSrc}
                            alt={item.altText}
                            title={item.title}
                            text={item.text}
                        />
                    ))}
                </Grid>
            </Container>
        </section>
    );
}

const styles = {
    grid: {
        width: ["100%", "80%", "100%"],
        mx: "auto",
        gridGap: ["35px 0", null, "40px 40px", "50px 60px", "30px", "50px 40px", "55px 90px"],
        gridTemplateColumns: ["repeat(1,1fr)", null, "repeat(2,1fr)", null, "repeat(4,1fr)"],
    },
};
