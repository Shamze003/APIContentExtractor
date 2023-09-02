const fs = require("fs");
const axios = require("axios");

const cookie = `s_ecid=MCMID%7C21661617554033344894286612255569098905; _fbp=fb.1.1659965666194.318153444; client=881ce367-3b15-11ed-be10-ef7ccaf7249e; _mkto_trk=id:212-TCU-034&token:_mch-sap.com-1663919918916-95150; notice_preferences=2:; notice_gdpr_prefs=0,1,2:; cmapi_cookie_privacy=permit 1,2,3; s_vi=[CS]v1|31D04A79C959BD27-60001054C4FB4E79[CE]; _gd_svisitor=24055a68d1080000be0ef162f9010000ca2b2300; cmapi_gtm_bl=; mbox=PC#5294e29e67104584b01fbaa9e76bc003.31_0#1756548195|session#d12d28d40a9d4bad8fdda16cc0f54c0b#1693305255; _gd_visitor=fe8787a8-d72e-447a-8b81-c9e05b425535; _an_uid=-1; uid_login=true; BIGipServercontenth6pughgvv2.factoryeu2.customdomain=!vTXdQl/IJ2O2weTtG7q/0ixJ9gyIiywdma9cio9jk7UZmzz4UAS8JHOiwwCCzXOC+SYb67g/rR2vUVs=; notice_behavior=implied,us; AMCVS_227AC2D754DCAB340A4C98C6%40AdobeOrg=1; s_plt=1.10; s_pltp=undefined; IDP_SESSION_MARKER_accounts=eyJhbGciOiJFQ0RILUVTK0EyNTZLVyIsImVuYyI6IkExMjhDQkMtSFMyNTYiLCJraWQiOm51bGwsImN0eSI6IkpXVCIsImVwayI6eyJrdHkiOiJFQyIsIngiOiJvbXMtdVJ0V0RXS1I4VGMyVlB4REMwOGFJdWlZTGlMZkRrdWl2TFR2amVnIiwieSI6Ilc3dzdtWkQ2WVp0c0JtZ3AydkVGdXYzTGd2cmk5Q2szRUlGaWJhOUdoWE0iLCJjcnYiOiJQLTI1NiJ9fQ.9yMXmZHxaV3H0e2OQm95CNKhk8bnvND_Gab3kwPqLf3C3QRaznPOBw.C0L40E_6QmZHvwfdw-7wxQ.eXNkNJCPWcKunu-LpkTJ6qCOBlnd23hhOtFMTYNHzu4ac1TpPaBJzGrYaSV3j3OQ8EIZPucX9UKVNo5O5J9W8_XH1ONdmJg3gDyrSExQAk4rhJbsknRl6Fy-t-wiB5CyhseMdrGb8w758GsUXckt5V-QP8LwhIv8qgv2hlk48PqrDoktkHjIyfOjfkduiFtPNDt2NeQyYZ5PbKXg2D8Jgf0hKAecPpQHzMQjS-e5ddWy0VJ71NRyaLqIrYfJud2aQLhRiH7SWS6u4frbiFKGIzbobkV1fgUyxDZ7ZbSQ37Ni1UhTK-cQKJ8xHr_r4vbJPqi_8GpEnoo9PdRZcJ2j4kVvC29seZCzuzdahuFYk0XZHYnNxoqZiWGefG-pWgoFmuqjDtk9qdiVmK-jRUBbWmJTAWOgOEm9YLNWqBKqWS02LcTQWdKC3LnSB-kV88BlkaEv7pCkLklyAuZ9p_9ZUhy9q8z6J6mW2OlESpazR66uQRwQEggQEnrt4IH75gFq2psSYzm_mtb6PKN5nj5VxD4AaO_1GxfU3I5bejlWdNziQ1hcMfYwoGM9pDkCb4TUAeXvdpa5hdqRLtzQUKcz51X4rkKoYE2xf61_Gj1EY_GpXWjUnCS0y35dAbCiHLk2.RVcxzeOcgwTjuiO5YPZCxA; slo_regular_domains_x5lqsajelb_x5lqsajelb=H4sIAAAAAAAAAMvf%2FemRjOJZRs7V9j7x5o8lAFut8HMQAAAA; JTENANTSESSIONID_x5lqsajelb=saFJpM1JqJ0YiPPx7o0u1Ky9QztX50bL2z3dVOMTuwU%3D; s_referrer=1%7Chttps%3A//www.google.com/; TAsessionID=edf8965a-2c3b-409e-ae9d-5125c38fc858|EXISTING; oucrsjlllwkhsiiuyikznbsux=%2B73aiMj%2Fkv1046ogukdZh5bYw6zhaVNcgiVtTBv%2BFUtlKZyFkJIaxmtUE3sYutK7EIC2zLw43MAB0TggSJRRRAyPNxQs5oKm3tDSZTbPC4%2F8i4HL8Cxy2Y2Y%2FwjJ6%2FL4muyJI1qo%2BWm%2F6Q4NzK9Ny3oqHypqv%2B6%2BahVzCXVFQ%2FcQ%2FGCUqcMquKOzsUmAaUVFzrfiiXwFNSswYJWBBol635mGq%2FtRiAbdTMBfknQVEhi9dru7mvr8%2F%2BVlIDZClhY9D0lUplvglz6QcKdjWncsZdUvbKFmNdX2OJd787EvTd1x61ANM6rTBWayuktEnbewSxc%2B7GXlhhbuljCaLH9Uqw%3D%3D; AMCV_227AC2D754DCAB340A4C98C6%40AdobeOrg=-2121179033%7CMCIDTS%7C19601%7CMCMID%7C21661617554033344894286612255569098905%7CMCAAMLH-1694181349%7C12%7CMCAAMB-1694181349%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1693583749s%7CNONE%7CMCAID%7CNONE%7CvVersion%7C5.3.0; JSESSIONID=809F7192174073BDBB7B92035B8EEF04A671EC96D58432F3E5A2164EBD108C3B; s_pers=%20s_fid%3D02F841314AFB984B-2B66A876429026F3%7C1829279054194%3B%20s_sapvisid%3D881ce3673b1511edbe10ef7ccaf7249e%7C1813917980544%3B%20c13%3Dapi%253A%252Fapi%252FSLSPRCGACCESSSEQUENCE_0001%252Foverview%7C1693578363489%3B%20pe%3Dno%2520value%7C1693578363494%3B%20s_visit%3D1%7C1693578363504%3B; s_sess=%20s_sq%3Dsapaccount%253D%252526c.%252526a.%252526activitymap.%252526page%25253Dsam%2525253A%2525252Fcore%2525252Fcore%2525252Flogin-as%2525252Fautologin%252526link%25253DSign%25252520in%252526region%25253Droot%252526pageIDType%25253D1%252526destination%25253Dno%25252520destination%252526.activitymap%252526.a%252526.c%252526pid%25253Dsam%2525253A%2525252Fcore%2525252Fcore%2525252Flogin-as%2525252Fautologin%252526pidt%25253D1%252526oid%25253DfunctionGr%25252528%25252529%2525257B%2525257D%252526oidt%25253D2%252526ot%25253DSUBMIT%3B%20s_cc%3Dtrue%3B`;

let v4_json = fs.readFileSync("APIHub_oDataV4.json");
let v4_api_names = JSON.parse(v4_json);

let v2_json = fs.readFileSync("APIHub_oDataV2.json");
let v2_api_names = JSON.parse(v2_json);
v2_api_names = v2_api_names.d.results;


v4_api_names.forEach(async (api) => {
  let dir = `./apidocs/${api.Name}`;
  // https://api.sap.com/odata/1.0/catalog.svc/APIContent.APIs('SLSPRCGACCESSSEQUENCE_0001')/$value?type=JSON&attachment=true
  let url = `https://api.sap.com/odata/1.0/catalog.svc/APIContent.APIs('${api.Name}')/$value?type=JSON&attachment=false`;

  console.log(dir);
  axios({
    method: "get",
    url: url,
    headers: {
      Accept: `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7`,
      Cookie: cookie,
    },
  }).then((response) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    fs.writeFileSync(`${dir}/${api.Name}.json`, JSON.stringify(response.data));
  });
});

v4_api_names.forEach(async (api) => {
    let dir = `./apidocs/${api.Name}`;
    // https://api.sap.com/odata/1.0/catalog.svc/APIContent.APIs('SLSPRCGACCESSSEQUENCE_0001')/$value?type=JSON&attachment=true
    let url = `https://api.sap.com/odata/1.0/catalog.svc/APIContent.APIs('${api.Name}')/$value?type=EDMX&attachment=false`;
  
    console.log(dir);
    axios({
      method: "get",
      url: url,
      headers: {
        Accept: `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7`,
        Cookie: cookie,
      },
    }).then((response) => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }
      fs.writeFileSync(`${dir}/${api.Name}.edmx`, JSON.stringify(response.data));
    });
  });


v2_api_names.forEach(async (api) => {
  let dir = `./apidocs/${api.Name}`;
  // https://api.sap.com/odata/1.0/catalog.svc/APIContent.APIs('SLSPRCGACCESSSEQUENCE_0001')/$value?type=JSON&attachment=true
  let url = `https://api.sap.com/odata/1.0/catalog.svc/APIContent.APIs('${api.Name}')/$value?type=JSON&attachment=false`;

  console.log(dir);
  axios({
    method: "get",
    url: url,
    headers: {
      Accept: `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7`,
      Cookie: cookie,
    },
  }).then((response) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    fs.writeFileSync(`${dir}/${api.Name}.json`, JSON.stringify(response.data));
  });
});


v2_api_names.forEach(async (api) => {
  let dir = `./apidocs/${api.Name}`;
  // https://api.sap.com/odata/1.0/catalog.svc/APIContent.APIs('SLSPRCGACCESSSEQUENCE_0001')/$value?type=JSON&attachment=true
  let url = `https://api.sap.com/odata/1.0/catalog.svc/APIContent.APIs('${api.Name}')/$value?type=EDMX&attachment=false`;

  console.log(dir);
  axios({
    method: "get",
    url: url,
    headers: {
      Accept: `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7`,
      Cookie: cookie,
    },
  }).then((response) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    fs.writeFileSync(`${dir}/${api.Name}.edmx`, JSON.stringify(response.data));
  });
});
