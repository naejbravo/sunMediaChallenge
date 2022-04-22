const NETWORK_ERROR_PROBABILITY = 0.5;

fakeFetch = (ad, cb) => {
  const fakeResponses = [
    { ad: 1, title: "The first ad" },
    { ad: 2, title: "The second ad" },
    { ad: 3, title: "The third ad" },
    { ad: 4, title: "The forth ad" },
    { ad: 5, title: "The last ad" },
  ];
  const randomDelay = (Math.round(Math.random() * 1e4) % 40) + 1000;

  return new Promise((resolve) => {
    setTimeout(() => {
      const networkError = Math.random() <= NETWORK_ERROR_PROBABILITY;
      const currentAd = fakeResponses.find((resp) => resp.ad === ad);
      if (networkError) {
        resolve(cb(`Failed to load the ad "${ad}"`));
      } else {
        resolve(cb(null, currentAd));
      }
    }, randomDelay);
  });
};

function cb(e, n) {
  return e ? e : n;
}

const fetchAds = async () => {
  const p1 = await fakeFetch(1, cb);
  if (typeof p1 === "object") {
    console.log(p1.title);
  } else {
    let i = 0;
    while (i < 3) {
      const p1 = await fakeFetch(1, cb);
      if (typeof p1 === "object") {
        i = 4;
        console.log(p1.title);
      } else {
        console.log("...");
        i++;
      }
    }
    if (i === 3) {
      console.log(p1);
      return;
    }
  }
  const p2 = await fakeFetch(2, cb);
  if (typeof p2 === "object") {
    console.log(p2.title);
  } else {
    let i = 0;
    while (i < 3) {
      const p2 = await fakeFetch(2, cb);
      if (typeof p2 === "object") {
        i = 4;
        console.log(p2.title);
      } else {
        console.log("...");
        i++;
      }
    }
    if (i === 3) {
      console.log(p2);
      return;
    }
  }
  const p3 = await fakeFetch(3, cb);
  if (typeof p3 === "object") {
    console.log(p3.title);
  } else {
    let i = 0;
    while (i < 3) {
      const p3 = await fakeFetch(3, cb);
      if (typeof p3 === "object") {
        i = 4;
        console.log(p3.title);
      } else {
        console.log("...");
        i++;
      }
    }
    if (i === 3) {
      console.log(p3);
      return;
    }
  }
  const p4 = await fakeFetch(4, cb);
  if (typeof p4 === "object") {
    console.log(p4.title);
  } else {
    let i = 0;
    while (i < 3) {
      const p4 = await fakeFetch(4, cb);
      if (typeof p4 === "object") {
        i = 4;
        console.log(p4.title);
      } else {
        console.log("...");
        i++;
      }
    }
    if (i === 3) {
      console.log(p4);
      return;
    }
  }
  const p5 = await fakeFetch(5, cb);
  if (typeof p5 === "object") {
    console.log(p5.title);
    console.log("done!");
  } else {
    let i = 0;
    while (i < 3) {
      const p5 = await fakeFetch(5, cb);
      if (typeof p5 === "object") {
        i = 4;
        console.log(p5.title);
        console.log("done!");
      } else {
        console.log("...");
        i++;
      }
    }
    if (i === 3) {
      console.log(p5);
      return;
    }
  }
};

fetchAds();
