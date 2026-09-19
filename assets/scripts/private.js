console.log('in private dot js');

const lasagna = sessionStorage.getItem('lasagna');


if(lasagna === 'true'){
    console.log('yes signed in');
}
else{
    console.log('no, not signed in');
    window.location.href = 'signin.html'
}
