import Remarkable from 'remarkable';
import fs from 'fs';

const md = new Remarkable('full');

export default {
    articles: [
        {date: "Nov 17, 2014", title: "Famo.us" content: md.render(fs.readFileSync(__dirname + '/articles/famous.md','utf8'))},
        {date: "Sep 6, 2015", title: "Staying Current", content: md.render(fs.readFileSync(__dirname + '/articles/stayingCurrent.md','utf8'))}
    ]
    news: [
        {date: "Dec 02, 2015", title: "Webworkers & React", links: ["http://blog.nparashuram.com/2015/12/react-web-worker-renderer.html?m=1"], comment:""},
        {date: "Jan 09, 2016", title: "High Performance Browser Networking", links: ["http://shop.oreilly.com/product/0636920028048.do?intcmp=il-npa-books-video-product_chimera&utm_campaign=(organic)&utm_source=google&utm_medium=organic"], comment:"I've heard great things about this book"},
        {date: "Jan 15, 2016", title: "tota11y accessibility visualization toolkit", links: [" http://khan.github.io/tota11y/"], comment:""},
        {date: "Jan 15, 2016", title: "Pocket Sized Javascript", links: [" http://www.thedotpost.com/2015/12/henrik-joreteg-pocket-sized-javascript","http://www.pocketjavascript.com/blog/2015/11/23/introducing-pokedex-org"], comment:"The first link is the talk the second is referenced in the talk."},
        {date: "Jan 19, 2016", title: "How I Shrank my CSS by 84kb by Refactoring with ITCSS", links: ["https://medium.com/@jordankoschei/how-i-shrank-my-css-by-84kb-by-refactoring-with-itcss-2e8dafee123a#.ub4mppfci"], comment:""},
        {date: "Jan 30, 2016", title: "Content & Display Patterns", links: ["http://danielmall.com/articles/content-display-patterns/?utm_source=Responsive+Design+Weekly&utm_campaign=086d22b0c7-Responsive_Design_Weekly_193&utm_medium=email&utm_term=0_df65b6d7c8-086d22b0c7-59034165&goal=0_df65b6d7c8-086d22b0c7-59034165&mc_cid=086d22b0c7&mc_eid=c711125811"], comment:""},
        {date: "Jan 31, 2016", title: "Alternative Node Package Manager", links: ["http://gugel.io/ied/", "http://nixos.org/nix/"], comment:"The second link is where it derives some of its insperation."},
        {date: "Feb 12, 2016", title: "Shasta js", links: ["https://github.com/shastajs"], comment:"Dan Abermov just tweeted about this."},
        {date: "Feb 14, 2016", title: "React Native Navigation - Experimental", links: ["https://gist.github.com/brentvatne/52af349a6b6ef2ee1b06","https://github.com/facebook/react-native/commit/a3085464f6ea36fc6b53cd0c711c048ffb1516f9"], comment:""},
        {date: "Feb 18, 2016", title: "More on Webworkers & React", links: ["http://blog.nparashuram.com/2016/02/using-webworkers-to-make-react-faster.html?utm_campaign=React%2BNewsletter&utm_medium=email&utm_source=React_Newsletter_23"], comment:""},
        {date: "Feb 20, 2016", title: "Microsoft's Radical Bet On A New Type Of Design Thinking", links: ["https://www.fastcodesign.com/3054927/the-big-idea/microsofts-inspiring-bet-on-a-radical-new-type-of-design-thinking"], comment:""},
        {date: "Feb 22, 2016", title: "Famo.us rethought" , links: ["https://github.com/dmvaldman/samsara"] , comment: "Glad someone picked up where famo.us left off."},
        {date: "Feb 22, 2016", title: "2016 React Conf Summary" , links: ["https://medium.com/@brttb/react-js-conf-2016-day-1-part-1-fcb20ed8acd5","https://medium.com/@brttb/react-js-conf-2016-quick-summaries-day-1-part-2-4664982c949c"] , comment: ""},
        {date: "Feb 23, 2016", title: "Resizer", links: ["http://design.google.com/resizer/"], comment: "A handy tool"}
    ]
};
