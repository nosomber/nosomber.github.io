
let secret = "amor";
let input = prompt('your:');
if(md5(input) != md5(secret)) {
    alert("error, try again");
}
