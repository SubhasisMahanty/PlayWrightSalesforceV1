const browsers = [
    "Chrome",
    "Firefox",
    "Edge",
    "Safari"
];
for (const b of browsers) { 
    // console.log(b)
};
//for each

// browsers.forEach(x => { console.log(x); });

const numbers = [10, 20, 30, 40, 50];

for (let n of numbers) { 
    if (n > 25) { 
        // console.log(n);
    }
};
//for each
// numbers.forEach(n => { if (n > 25) { console.log(n); } });

const users = [
    {
        username: "admin",
        password: "admin123"
    },
    {
        username: "manager",
        password: "manager123"
    },
    {
        username: "user",
        password: "user123"
    }
];

for (const u of users) { 
    // console.log(u.username +"->"+u.password);
}

const fields = {
    username: "testuser",
    email: "test@test.com",
    phone: "9876543210"
};

Object.entries(fields).forEach(([key, val]) => { console.log(key + " " + val); });

users.forEach(val => { console.log(val.username +" "+val.password); });