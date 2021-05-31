const mainDiv = document.getElementById("main");
const staticData = `{"responseHeader":{"status":0,"QTime":435,"params":{"query":"( mediatype:audio AND _exists_:subject )","qin":"mediatype:audio AND _exists_:subject","fields":"identifier,mediatype,subject","wt":"json","rows":"100","json.wrf":"callback","start":200}},"response":{"numFound":8624893,"start":200,"docs":[{"identifier":"pod-wsjtecham-20111012","mediatype":"audio","subject":["Wall Street Journal Podcast Archive","Wall Street Journal Tech News Briefing"]},{"identifier":"The_Jim_Rome_Show_Podcast-2012-08-29","mediatype":"audio","subject":["The Jim Rome Show","CBS Sports Radio"]},{"identifier":"the-savage-nation-2013-10-28","mediatype":"audio","subject":["Michael Savage","The Savage Nation","WCB","With commmercial breaks","recorded"]},{"identifier":"marshillchurch-audio-20071028","mediatype":"audio","subject":["Marshill Church","Marshill Church Audio Archive"]},{"identifier":"kqed-forum-with-michael-krasny-0900-2007-02-06","mediatype":"audio","subject":["KQED","Forum with Michael Krasny"]},{"identifier":"The_Web_Ahead_111","mediatype":"audio","subject":["The Web Ahead","Jen Simmons","Karen McGrane"]},{"identifier":"the-laura-ingraham-show-2006-05-25","mediatype":"audio","subject":["Laura Ingraham","The Laura Ingraham Show"]},{"identifier":"the-laura-ingraham-show-2009-07-21","mediatype":"audio","subject":["Laura Ingraham","The Laura Ingraham Show"]},{"identifier":"knss-radio-steve-and-ted-in-the-morning-2008-09-23","mediatype":"audio","subject":["KNSS Radio Steve and Ted in the Morning","KNSS Radio"]},{"identifier":"free-talk-live-2007-08-24","mediatype":"audio","subject":"Free Talk Live"},{"identifier":"wbez91.5-848-04-14-2009","mediatype":"audio","subject":["WBEZ","848","Eight Forty-Eight","Richard Steele"]},{"identifier":"npr-morning-edition-01-31-2001","mediatype":"audio","subject":"npr morning edition"},{"identifier":"kqed-forum-with-michael-krasny-0900-2004-02-05","mediatype":"audio","subject":["KQED","Forum with Michael Krasny"]},{"identifier":"coordinatorcall111205","mediatype":"audio","subject":"keyword"},{"identifier":"Microsoft_Research_Audio_104504","mediatype":"audio","subject":["Microsoft Research","Microsoft Research Audio MP3 Archive","Jim Larus","Mark Hill"]},{"identifier":"kbsworld-rki-audio-english-service-2010-04-16","mediatype":"audio","subject":["rki","Radio Korea International","KBS World","English Service"]},{"identifier":"kpfa-archives-radio-podcast-2014-06-18","mediatype":"audio","subject":["KPFA","94.1FM"]},{"identifier":"the-sean-hannity-show-2008-12-26","mediatype":"audio","subject":["Sean Hannity","The Sean Hannity Show"]},{"identifier":"kbsworld-rki-audio-english-service-2013-09-11","mediatype":"audio","subject":["rki","Radio Korea International","KBS World","English Service"]},{"identifier":"npr-morning-edition-04-17-2006","mediatype":"audio","subject":"npr morning edition"},{"identifier":"loveline-podcast-04-16-2007","mediatype":"audio","subject":["Dr. Drew","Loveline"]},{"identifier":"pris-the-world-10-02-2013","mediatype":"audio","subject":["PRI","Public Radio International","The World"]},{"identifier":"radionz-morning-report-2010-11-09","mediatype":"audio","subject":["Radio New Zealand","Morning Report","Geoff Robinson","Sean Plunket"]},{"identifier":"abc-rn-breakfast-full-2015-06-09","mediatype":"audio","subject":["ABC","ABC RN Breakfast","Australian Broadcasting Corporation"]},{"identifier":"The_Jim_Rome_Show_Podcast-2008-06-23","mediatype":"audio","subject":["The Jim Rome Show","CBS Sports Radio"]},{"identifier":"bbc-radio-4-the-world-tonight-2016-04-27","mediatype":"audio","subject":["BBC Radio 4","The World Tonight"]},{"identifier":"cbsradio-hourly-2012-04-12","mediatype":"audio","subject":"CBS Radio hourly"},{"identifier":"kpfa-archives-radio-podcast-2004-05-05","mediatype":"audio","subject":["KPFA","94.1FM"]},{"identifier":"pod-wsjtechpm-20130705","mediatype":"audio","subject":["Wall Street Journal Podcast Archive","Wall Street Journal Tech News Briefing"]},{"identifier":"wbez91.5-worldview-03-27-2006","mediatype":"audio","subject":["WBEZ","Worldview","Jerome McDonnell"]},{"identifier":"kpfa-archives-radio-podcast-2008-07-04","mediatype":"audio","subject":["KPFA","94.1FM"]},{"identifier":"cbsradio-update-2010-07-04","mediatype":"audio","subject":"CBS Radio update"},{"identifier":"radionz-nine-to-noon-2015-12-02","mediatype":"audio","subject":["Radio New Zealand","Nine to Noon","Kathryn Ryan"]},{"identifier":"cbsradio-update-2012-04-15","mediatype":"audio","subject":"CBS Radio update"},{"identifier":"pod-wsjtechpm-20130516","mediatype":"audio","subject":["Wall Street Journal Podcast Archive","Wall Street Journal Tech News Briefing"]},{"identifier":"Water_Mark_Church_20050904","mediatype":"audio","subject":["Water Mark Church","Todd Wagner"]},{"identifier":"bbc-radio-4-six-oclock-news-2011-11-07","mediatype":"audio","subject":["BBC Radio 4","Six OClock News"]},{"identifier":"npr-talk-of-the-nation-01-24-2001","mediatype":"audio","subject":"npr talk of the nation"},{"identifier":"radionz-morning-report-2010-11-04","mediatype":"audio","subject":["Radio New Zealand","Morning Report","Geoff Robinson","Sean Plunket"]},{"identifier":"free-talk-live-2007-08-02","mediatype":"audio","subject":"Free Talk Live"},{"identifier":"the-sean-hannity-show-2011-04-06","mediatype":"audio","subject":["Sean Hannity","The Sean Hannity Show"]},{"identifier":"wbez91.5-worldview-01-11-2008","mediatype":"audio","subject":["WBEZ","Worldview","Jerome McDonnell"]},{"identifier":"npr-talk-of-the-nation-08-07-2007","mediatype":"audio","subject":"npr talk of the nation"},{"identifier":"The_Nerdist_Podcast_548","mediatype":"audio","subject":["The Nerdist Podcast","Chris Hardwick","Superego"]},{"identifier":"alaska-news-nightly-2011-03-31","mediatype":"audio","subject":["Alaska Public Media","Alaska News Nightly"]},{"identifier":"the-savage-nation-2015-01-13","mediatype":"audio","subject":["Michael Savage","The Savage Nation","WCB","With commmercial breaks","recorded"]},{"identifier":"Joystiq_Massively_Speaking_076","mediatype":"audio","subject":"Massively Speaking"},{"identifier":"npr-morning-edition-01-15-2002","mediatype":"audio","subject":"npr morning edition"},{"identifier":"the-laura-ingraham-show-2009-06-23","mediatype":"audio","subject":["Laura Ingraham","The Laura Ingraham Show"]},{"identifier":"the-savage-nation-2015-05-29","mediatype":"audio","subject":["Michael Savage","The Savage Nation","WCB","With commercial breaks","recorded"]},{"identifier":"loveline-podcast-08-08-2004","mediatype":"audio","subject":["Dr. Drew","Loveline"]},{"identifier":"radio-free-europe-afghan-ch17-ondemand-archives-2002-05-14","mediatype":"audio","subject":["Radio Free Europe","Radio Liberty","afghan","ch17"]},{"identifier":"cbsradio-update-2009-02-02","mediatype":"audio","subject":"CBS Radio update"},{"identifier":"abc-rn-big-ideas-full-2015-07-07","mediatype":"audio","subject":["ABC","ABC RN Big Ideas","Australian Broadcasting Corporation"]},{"identifier":"the-laura-ingraham-show-2016-12-22","mediatype":"audio","subject":["Laura Ingraham","The Laura Ingraham Show"]},{"identifier":"loveline-podcast-04-07-2004","mediatype":"audio","subject":["Dr. Drew","Loveline"]},{"identifier":"bbc-radio-4-the-world-tonight-2009-12-02","mediatype":"audio","subject":["BBC Radio 4","The World Tonight"]},{"identifier":"abc-rn-late-night-live-full-2006-02-02","mediatype":"audio","subject":["ABC","ABC RN Late Night Live","Australian Broadcasting Corporation"]},{"identifier":"The_Jim_Rome_Show_Podcast-2010-07-19","mediatype":"audio","subject":["The Jim Rome Show","CBS Sports Radio"]},{"identifier":"cbsradio-hourly-2009-09-19","mediatype":"audio","subject":"CBS Radio hourly"},{"identifier":"wbez91.5-worldview-03-11-2010","mediatype":"audio","subject":["WBEZ","Worldview","Jerome McDonnell"]},{"identifier":"kbsradio-2fm-coolfm-uvolume-2013-08-16","mediatype":"audio","subject":["KBS Radio","Cool FM","KBS 2FM","uvolume"]},{"identifier":"radionz-nine-to-noon-2008-01-29","mediatype":"audio","subject":["Radio New Zealand","Nine to Noon","Kathryn Ryan"]},{"identifier":"alaska-news-nightly-2009-02-13","mediatype":"audio","subject":["Alaska Public Media","Alaska News Nightly"]},{"identifier":"kbsradio-2fm-coolfm-gmp-2010-02-02","mediatype":"audio","subject":["KBS Radio","Cool FM","KBS 2FM","gmp","Good Morning Pops"]},{"identifier":"radionz-nine-to-noon-2008-06-23","mediatype":"audio","subject":["Radio New Zealand","Nine to Noon","Kathryn Ryan"]},{"identifier":"loveline-podcast-04-12-2004","mediatype":"audio","subject":["Dr. Drew","Loveline"]},{"identifier":"wbez91.5-worldview-07-24-2009","mediatype":"audio","subject":["WBEZ","Worldview","Jerome McDonnell"]},{"identifier":"pri-the-takeaway-10-23-2015","mediatype":"audio","subject":["PRI","Public Radio International","The Takeaway"]},{"identifier":"The_Jim_Rome_Show_Podcast-2007-05-10","mediatype":"audio","subject":["The Jim Rome Show","CBS Sports Radio"]},{"identifier":"wbez91.5-848-02-06-2008","mediatype":"audio","subject":["WBEZ","848","Eight Forty-Eight","Richard Steele"]},{"identifier":"pris-the-world-04-28-2003","mediatype":"audio","subject":["PRI","Public Radio International","The World"]},{"identifier":"the-laura-ingraham-show-2017-05-16","mediatype":"audio","subject":["Laura Ingraham","The Laura Ingraham Show"]},{"identifier":"RetroMacCast_180","mediatype":"audio","subject":"RetroMacCast"},{"identifier":"npr-talk-of-the-nation-10-29-2002","mediatype":"audio","subject":"npr talk of the nation"},{"identifier":"the-laura-ingraham-show-2015-07-14","mediatype":"audio","subject":["Laura Ingraham","The Laura Ingraham Show"]},{"identifier":"loveline-podcast-09-13-1998","mediatype":"audio","subject":["Dr. Drew","Loveline"]},{"identifier":"npr-talk-of-the-nation-11-09-2009","mediatype":"audio","subject":"npr talk of the nation"},{"identifier":"the-sean-hannity-show-2016-07-12","mediatype":"audio","subject":["Sean Hannity","The Sean Hannity Show"]},{"identifier":"Microsoft_Research_Audio_103437","mediatype":"audio","subject":["Microsoft Research","Microsoft Research Audio MP3 Archive","Kirsten Wiley","Cliff Schmidt"]},{"identifier":"kpfa-archives-radio-podcast-2017-04-24","mediatype":"audio","subject":["KPFA","94.1FM"]},{"identifier":"npr-talk-of-the-nation-11-08-2002","mediatype":"audio","subject":"npr talk of the nation"},{"identifier":"the-laura-ingraham-show-2010-07-22","mediatype":"audio","subject":["Laura Ingraham","The Laura Ingraham Show"]},{"identifier":"loveline-podcast-08-01-2004","mediatype":"audio","subject":["Dr. Drew","Loveline"]},{"identifier":"pod-wsjtecham-20120313","mediatype":"audio","subject":["Wall Street Journal Podcast Archive","Wall Street Journal Tech News Briefing"]},{"identifier":"bbc-radio-4-the-world-tonight-2015-02-02","mediatype":"audio","subject":["BBC Radio 4","The World Tonight"]},{"identifier":"npr-morning-edition-09-23-1996","mediatype":"audio","subject":"npr morning edition"},{"identifier":"the-morning-blaze-with-doc-thompson-08-10-2017","mediatype":"audio","subject":["TheBlaze Radio Network","The Morning Blaze","Doc Thompson"]},{"identifier":"npr-talk-of-the-nation-09-18-2007","mediatype":"audio","subject":"npr talk of the nation"},{"identifier":"radionz-nine-to-noon-2017-06-19","mediatype":"audio","subject":["Radio New Zealand","Nine to Noon","Kathryn Ryan"]},{"identifier":"The_Jim_Rome_Show_Podcast-2009-02-13","mediatype":"audio","subject":["The Jim Rome Show","CBS Sports Radio"]},{"identifier":"loveline-podcast-04-15-2007","mediatype":"audio","subject":["Dr. Drew","Loveline"]},{"identifier":"npr-talk-of-the-nation-06-03-1997","mediatype":"audio","subject":"npr talk of the nation"},{"identifier":"asot096","mediatype":"audio","subject":["asot","asot096","trance"]},{"identifier":"npr-morning-edition-04-17-2007","mediatype":"audio","subject":"npr morning edition"},{"identifier":"npr-morning-edition-10-30-2003","mediatype":"audio","subject":"npr morning edition"},{"identifier":"89.3-KPCC-AirTalk-02-13-2003","mediatype":"audio","subject":["KPCC","89.3 KPCC","AirTalk","Larry Mantle"]},{"identifier":"the-sean-hannity-show-2011-05-18","mediatype":"audio","subject":["Sean Hannity","The Sean Hannity Show"]},{"identifier":"kpfa-archives-radio-podcast-2017-08-10","mediatype":"audio","subject":["KPFA","94.1FM"]},{"identifier":"cbsradio-update-2011-08-24","mediatype":"audio","subject":"CBS Radio update"}]}}`;

const fields = ["identifier", "subject", "type"];

const formatUri = (rows, page) => {
  const baseUrl = "https://archive.org/advancedsearch.php";
  const query = `mediatype:\"audio\"+AND+_exists_:subject`;
  const returnedFields = fields.map((field) => `&fl[]=${field}`).join("");
  const queryConfig = `&rows=${rows}&page=${page}&output=json&save=yes`;

  const uri = encodeURI(`${baseUrl}?q=${query}${returnedFields}${queryConfig}`);

  return uri;
};

const fetchData = async (uri) => {
  let res = await fetch(uri);
  const data = res.json();
  return data;
};

const getMerdier = async (rows = 1, page = 1) => {
  const uri = formatUri(rows, page);
  const items = await fetchData(uri);

  return items;
};

const getRowsFromPage = (page) => {
  const docs = page.response.docs.map((doc) => doc.subject);
  return docs;
};

const getItemfromDocs = (doc) => {};

const listSubject = async () => {
  const fileMetadata = await getMerdier();

  const numFound = fileMetadata.response.numFound;
  const rowsNumber = 100;

  const pagesNumber = Math.floor(numFound / rowsNumber);
  const items = [];

  //  for eeach page I load 100 rows
  for (let i = 0; i < 1; i++) {
    const page = await getMerdier(rowsNumber, i);
    const doc = getRowsFromPage(page);
  }
  console.log(doc);
};

const countDuplicate = (tab) => {
  const result = []
  for (let i = 0; i < tab.length; i++) {
    const obj = {
      count: 1,
      name: tab[i]
    };
    for (let j = i + 1; j < tab.length; j++) {
      if (tab[j] === tab[i]) {
        obj.count += 1;
      }
    }
    
    result.push(obj)
  }
  
  return result
}


const mergeStringArray = (tab) => {
  const result = []
  
  for (let row of tab) {
    if (Array.isArray(row)) {
      for (let subject of row) {
        result.push(subject);
      }
    } else {
      result.push(row);
    }
  }
  
  return result
}
const listSubjectStatic = async (page) => {
  const data = JSON.parse(page);
  const rows = getRowsFromPage(data);
  const subjects =mergeStringArray(rows);
  
  const uniq = countDuplicate(subjects)
  
  return uniq
};


// &fl%5B%5D= ---> ajoute un field a retourner
const main = async() => {
  // console.log(JSON.parse('{"connard": 1}'))
  const result = await listSubjectStatic(staticData);
  console.log(result)
  // listSubject();
};

main();
