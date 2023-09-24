var domain;

if(process.env.NODE_ENV === 'production'){
    //Enter the Domain
    // EX: domain:'https://yourDomain.com/api/'
    domain:'https://montagabalhamawy.github.io/Next-Full/api/'
}else{
    domain='http://localhost:3000/api/'
}

export default domain
