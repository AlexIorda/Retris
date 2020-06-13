<!-- The core Firebase JS SDK is always required and must be listed first -->
<
script src = "https://www.gstatic.com/firebasejs/7.15.1/firebase-app.js" > < /script>

<!-- TODO: Add SDKs for Firebase products that you want to use
https: //firebase.google.com/docs/web/setup#available-libraries -->
    <
    script src = "https://www.gstatic.com/firebasejs/7.15.1/firebase-analytics.js" > < /script>

<
script >
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyDLs_yONpVVj0YitLrurdbTExWbGPGgzeA",
        authDomain: "retris-de-zei.firebaseapp.com",
        databaseURL: "https://retris-de-zei.firebaseio.com",
        projectId: "retris-de-zei",
        storageBucket: "retris-de-zei.appspot.com",
        messagingSenderId: "753243868375",
        appId: "1:753243868375:web:4e204719d582e44a06b492",
        measurementId: "G-LDL8GP45BW"
    };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();