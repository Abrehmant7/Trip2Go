export interface Country {
    name: string;
    slug: string;
    region: string;
    flag: string;
    image?: ImageMetadata; // We will import these
    description?: string;
}

// Import images
import franceImg from "../assets/france.jpg";
import netherlandsImg from "../assets/netherlands.jpg";
import portugalImg from "../assets/portugal.jpg";
import greeceImg from "../assets/Greece.jpg";
import denmarkImg from "../assets/denmark.jpg";
import estoniaImg from "../assets/estonia.jpg";
import canadaImg from "../assets/canada.jpg";
import australiaImg from "../assets/sydney.jpg";
import ukImg from "../assets/UK.jpg";
import usaImg from "../assets/USA.jpg";
import germanyImg from "../assets/germany.jpg";
import italyImg from "../assets/italy.jpg";
import spainImg from "../assets/spain.jpg";
import swedenImg from "../assets/sweden.jpg";
import switzerlandImg from "../assets/switzerland.jpg";
import belgiumImg from "../assets/belgium.jpg";


export const countries: any[] = [
    // --- Europe (Schengen Area + UK) ---
    {
        name: "France",
        slug: "france",
        region: "Europe",
        flag: "https://flagcdn.com/w40/fr.png",
        image: franceImg,
        description: "Experience the romance of Paris, the lavender fields of Provence, and world-renowned cuisine. France offers an artful blend of history, culture, and gastronomic excellence that captivates every traveler."
    },
    {
        name: "Germany",
        slug: "germany",
        region: "Europe",
        flag: "https://flagcdn.com/w40/de.png",
        image: germanyImg,
        description: "From the fairytale castles of Bavaria to the vibrant streets of Berlin, Germany is a powerhouse of history and innovation. Discover a land of deep forests, historic cathedrals, and lively beer gardens."
    },
    {
        name: "Italy",
        slug: "italy",
        region: "Europe",
        flag: "https://flagcdn.com/w40/it.png",
        image: italyImg,
        description: "immersed in the cradle of the Renaissance. Italy enchants with its ancient Roman ruins, the rolling hills of Tuscany, and a culinary tradition that is celebrated worldwide. La Dolce Vita awaits."
    },
    {
        name: "Spain",
        slug: "spain",
        region: "Europe",
        flag: "https://flagcdn.com/w40/es.png",
        image: spainImg,
        description: "Feel the passion of flamenco and the warmth of the Mediterranean sun. Spain dazzles with its distinct architecture, vibrant festivals, and diverse landscapes ranging from sandy beaches to snowy mountains."
    },
    {
        name: "Netherlands",
        slug: "netherlands",
        region: "Europe",
        flag: "https://flagcdn.com/w40/nl.png",
        image: netherlandsImg,
        description: "Cycle through fields of blooming tulips and navigate charming canals. The Netherlands combines Golden Age artistic heritage with modern design and a laid-back, welcoming atmosphere."
    },
    {
        name: "Switzerland",
        slug: "switzerland",
        region: "Europe",
        flag: "https://flagcdn.com/w40/ch.png",
        image: switzerlandImg,
        description: "Breathe in the crisp Alpine air in a land of crystal-clear lakes and majestic peaks. Switzerland offers pristine nature, world-class skiing, and cities that blend medieval charm with urban sophistication."
    },
    {
        name: "Sweden",
        slug: "sweden",
        region: "Europe",
        flag: "https://flagcdn.com/w40/se.png",
        image: swedenImg,
        description: "Discover the heart of Scandinavia, where vast boreal forests meet slick modern cities. Sweden is a haven for design lovers, nature enthusiasts, and anyone seeking the magic of the Northern Lights."
    },
    {
        name: "Denmark",
        slug: "denmark",
        region: "Europe",
        flag: "https://flagcdn.com/w40/dk.png",
        image: denmarkImg,
        description: "Enter the happiest nation on earth, home to 'hygge' and Hans Christian Andersen. Denmark creates a cozy yet cool vibe with its historic castles, design-forward cities, and beautiful coastlines."
    },
    {
        name: "Estonia",
        slug: "estonia",
        region: "Europe",
        flag: "https://flagcdn.com/w40/ee.png",
        image: estoniaImg,
        description: "A digital nomad's paradise where medieval history meets modern tech. Wander through Tallinn's UNESCO-listed Old Town or explore wild bogs and islands in this Baltic gem."
    },
    {
        name: "Portugal",
        slug: "portugal",
        region: "Europe",
        flag: "https://flagcdn.com/w40/pt.png",
        image: portugalImg,
        description: "Europe's sun-kissed western edge offers dramatic cliffs, golden beaches, and melancholic Fado music. Portugal is a captivating blend of maritime heritage, delicious seafood, and warm hospitality."
    },
    {
        name: "Greece",
        slug: "greece",
        region: "Europe",
        flag: "https://flagcdn.com/w40/gr.png",
        image: greeceImg,
        description: "Walk in the footsteps of ancients in the cradle of Western civilization. Greece offers an endless summer with its iconic whitewashed islands, turquoise waters, and ancient temples."
    },
    {
        name: "Belgium",
        slug: "belgium",
        region: "Europe",
        flag: "https://flagcdn.com/w40/be.png",
        image: belgiumImg,
        description: "Indulge in world-famous chocolates, waffles, and beer. Belgium is a crossroads of Western Europe, featuring medieval towns like Bruges and the vibrant, multicultural capital of Brussels."
    },
    {
        name: "United Kingdom",
        slug: "united-kingdom",
        region: "Europe",
        flag: "https://flagcdn.com/w40/gb.png",
        image: ukImg,
        description: "Explore a kingdom of history, royalty, and rock 'n' roll. From the bustling streets of London to the rugged Highlands of Scotland, the UK offers a diverse cultural journey."
    },
    // Remaining Schengen Countries
    { name: "Austria", slug: "austria", region: "Europe", flag: "https://flagcdn.com/w40/at.png" },
    { name: "Czech Republic", slug: "czech-republic", region: "Europe", flag: "https://flagcdn.com/w40/cz.png" },
    { name: "Finland", slug: "finland", region: "Europe", flag: "https://flagcdn.com/w40/fi.png" },
    { name: "Hungary", slug: "hungary", region: "Europe", flag: "https://flagcdn.com/w40/hu.png" },
    { name: "Iceland", slug: "iceland", region: "Europe", flag: "https://flagcdn.com/w40/is.png" },
    { name: "Latvia", slug: "latvia", region: "Europe", flag: "https://flagcdn.com/w40/lv.png" },
    { name: "Liechtenstein", slug: "liechtenstein", region: "Europe", flag: "https://flagcdn.com/w40/li.png" },
    { name: "Lithuania", slug: "lithuania", region: "Europe", flag: "https://flagcdn.com/w40/lt.png" },
    { name: "Luxembourg", slug: "luxembourg", region: "Europe", flag: "https://flagcdn.com/w40/lu.png" },
    { name: "Malta", slug: "malta", region: "Europe", flag: "https://flagcdn.com/w40/mt.png" },
    { name: "Norway", slug: "norway", region: "Europe", flag: "https://flagcdn.com/w40/no.png" },
    { name: "Poland", slug: "poland", region: "Europe", flag: "https://flagcdn.com/w40/pl.png" },
    { name: "Slovakia", slug: "slovakia", region: "Europe", flag: "https://flagcdn.com/w40/sk.png" },
    { name: "Slovenia", slug: "slovenia", region: "Europe", flag: "https://flagcdn.com/w40/si.png" },
    { name: "Bulgaria", slug: "bulgaria", region: "Europe", flag: "https://flagcdn.com/w40/bg.png" },
    { name: "Romania", slug: "romania", region: "Europe", flag: "https://flagcdn.com/w40/ro.png" },
    { name: "Croatia", slug: "croatia", region: "Europe", flag: "https://flagcdn.com/w40/hr.png" },
    // (Note: Cyprus and Ireland are EU but not Schengen. Kept UK as requested.)

    // --- North America ---
    {
        name: "USA",
        slug: "usa",
        region: "North America",
        flag: "https://flagcdn.com/w40/us.png",
        image: usaImg,
        description: "From sea to shining sea, the United States offers boundless diversity. Experience the bright lights of NYC, the natural wonder of the Grand Canyon, and the entertainment capital of LA."
    },
    {
        name: "Canada",
        slug: "canada",
        region: "North America",
        flag: "https://flagcdn.com/w40/ca.png",
        image: canadaImg,
        description: "Explore the Great White North, a land of immense natural beauty and polite hospitality. Canada boasts cosmopolitan cities like Toronto and Vancouver nestled against wild, awe-inspiring landscapes."
    },
    {
        name: "Dominican Republic",
        slug: "dominican-republic",
        region: "North America",
        flag: "https://flagcdn.com/w40/do.png",
    },
    {
        name: "Cuba",
        slug: "cuba",
        region: "North America",
        flag: "https://flagcdn.com/w40/cu.png",
    },
    {
        name: "Jamaica",
        slug: "jamaica",
        region: "North America",
        flag: "https://flagcdn.com/w40/jm.png",
    },
    {
        name: "Bahamas",
        slug: "bahamas",
        region: "North America",
        flag: "https://flagcdn.com/w40/bs.png",
    },

    // --- Asia ---
    {
        name: "Thailand",
        slug: "thailand",
        region: "Asia",
        flag: "https://flagcdn.com/w40/th.png",
    },
    {
        name: "Japan",
        slug: "japan",
        region: "Asia",
        flag: "https://flagcdn.com/w40/jp.png",
    },
    {
        name: "Vietnam",
        slug: "vietnam",
        region: "Asia",
        flag: "https://flagcdn.com/w40/vn.png",
    },
    {
        name: "Indonesia",
        slug: "indonesia",
        region: "Asia",
        flag: "https://flagcdn.com/w40/id.png",
    },
    {
        name: "Maldives",
        slug: "maldives",
        region: "Asia",
        flag: "https://flagcdn.com/w40/mv.png",
    },

    // --- Africa ---
    {
        name: "Egypt",
        slug: "egypt",
        region: "Africa",
        flag: "https://flagcdn.com/w40/eg.png",
    },
    {
        name: "South Africa",
        slug: "south-africa",
        region: "Africa",
        flag: "https://flagcdn.com/w40/za.png",
    },
    {
        name: "Morocco",
        slug: "morocco",
        region: "Africa",
        flag: "https://flagcdn.com/w40/ma.png",
    },
    {
        name: "Kenya",
        slug: "kenya",
        region: "Africa",
        flag: "https://flagcdn.com/w40/ke.png",
    },
    {
        name: "Tanzania",
        slug: "tanzania",
        region: "Africa",
        flag: "https://flagcdn.com/w40/tz.png",
    },

    // --- South America ---
    {
        name: "Brazil",
        slug: "brazil",
        region: "South America",
        flag: "https://flagcdn.com/w40/br.png",
    },
    {
        name: "Argentina",
        slug: "argentina",
        region: "South America",
        flag: "https://flagcdn.com/w40/ar.png",
    },
    {
        name: "Peru",
        slug: "peru",
        region: "South America",
        flag: "https://flagcdn.com/w40/pe.png",
    },
    {
        name: "Colombia",
        slug: "colombia",
        region: "South America",
        flag: "https://flagcdn.com/w40/co.png",
    },
    {
        name: "Chile",
        slug: "chile",
        region: "South America",
        flag: "https://flagcdn.com/w40/cl.png",
    },

    // --- Oceania ---
    {
        name: "Australia",
        slug: "australia",
        region: "Oceania",
        flag: "https://flagcdn.com/w40/au.png",
        image: australiaImg,
        description: "Venture to the land Down Under, where adventures span from the rustic Outback to the vibrant harbor of Sydney. Encounter unique wildlife, ancient Aboriginal culture, and some of the world's best surf."
    },
    {
        name: "New Zealand",
        slug: "new-zealand",
        region: "Oceania",
        flag: "https://flagcdn.com/w40/nz.png",
    },
];
