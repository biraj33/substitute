const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');

var data;




app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://admin_biraj:Test123@atlascluster.skvmtce.mongodb.net/teacherDB", {useNewUrlParser:true});



const teacherName= ["CHEM.NH","CHEM.SB", "CHEM.UB","CHEM.SV","NEP.DR","MATH.RM","MATH.AC","MATH.DB","PHY.GS", "PHY.AS",  "PHY.AS",  "PHY.PK" ,"PHY.KG","ENG.GT", "COM.AM"];

var absentTeacher =[];

const pract = ["PHY.GS.PRACT","PHY.KG.PRACT","CHEM.UB.PRACT","CHEM.SB.PRACT","COM.AM.PRACT"];

const teachersSchema = {
    name : String,
    fullname: String,
    phone: Number,
    subject: String,
    image: String
}

const Teacher = mongoose.model("Teacher", teachersSchema);

const absentSchema = {
    absentTeacher: String
}

const Absent = mongoose.model("Absent", absentSchema);

const aSchema = {
    
    sun: [String],
    mon: [String],
    tue: [String],
    wed: [String],
    thu: [String],
    fri: [String]
}

const bSchema = {
    
    sun: [String],
    mon: [String],
    tue: [String],
    wed: [String],
    thu: [String],
    fri: [String]
}
const cSchema = {
    
    sun: [String],
    mon: [String],
    tue: [String],
    wed: [String],
    thu: [String],
    fri: [String]
}
const dSchema = {
    
    sun: [String],
    mon: [String],
    tue: [String],
    wed: [String],
    thu: [String],
    fri: [String]
}
const fSchema = {
    
    sun: [String],
    mon: [String],
    tue: [String],
    wed: [String],
    thu: [String],
    fri: [String]
}
const gSchema = {
    
    sun: [String],
    mon: [String],
    tue: [String],
    wed: [String],
    thu: [String],
    fri: [String]
}
const hSchema = {
    
    sun: [String],
    mon: [String],
    tue: [String],
    wed: [String],
    thu: [String],
    fri: [String]
}

const A = mongoose.model("A", aSchema );
const B = mongoose.model("B", bSchema );
const C = mongoose.model("C", cSchema );
const D = mongoose.model("D", dSchema );
const F = mongoose.model("F", fSchema );
const G = mongoose.model("G", gSchema );
const H = mongoose.model("H", hSchema );


const periodSchema = {

    


}

const sectionSchema = {
    section :String,
    sun:[String],
    mon:[String],
    tue:[String],
    wed:[String],
    thu:[String],
    fri:[String]
}

const Section = mongoose.model("Section" , sectionSchema);

let asun;
let amon;
let atue;
let awed;
let athu;
let afri;

let bsun;
let bmon;
let btue;
let bwed;
let bthu;
let bfri;

let csun;
let cmon;
let ctue;
let cwed;
let cthu;
let cfri;

let dsun;
let dmon;
let dtue;
let dwed;
let dthu;
let dfri;

let fsun;
let fmon;
let ftue;
let fwed;
let fthu;
let ffri;

let gsun;
let gmon;
let gtue;
let gwed;
let gthu;
let gfri;

let hsun;
let hmon;
let htue;
let hwed;
let hthu;
let hfri;



var teacher ={

    a:{
        sun:["SUN", "CHEM.NH","NEP.DR","MATH.AC","BREAK","PHY.GS","MATH.RM","ENG.GT","COM.AM","CHEM.SB"],
        mon:["MON", "MATH.DB", "CHEM.UB", "MATH.AC", "BREAK", "PHY.AS", "ENG.GT", "PHY.PK" , "COM.AM","MATH.RM"],
        tues:["TUES","PHY.KG","NEP.DR","CHEM.SV","BREAK","CHEM.SB","MATH.RM","PHY.PK","COM.AM","CHEM.UB"],
        wed:["WED","PHY.KG","MATH.DB","CHEM.NH","BREAK","COM.AM","PHY.GS.PRACT","PHY.KG.PRACT","ENG.GT"],
        thur:["THUR","PHY.GS","NEP.DR","MATH.DB","BREAK","COM.AM","CHEM.UB.PRACT","CHEM.SB.PRACT","ENG.GT"],
        fri:["FRI","MATH.AC","NEP.DR","CHEM.SV","BREAK","COM.AM","COM.AM.PRACT","COM.AM.PRACT","ENG.GT"]
    },
    h:{
    sun:["SUN", "CHEM.NH","NEP.DR","MATH.AC","BREAK","PHY.GS","MATH.RM","ENG.GT","COM.AM","CHEM.SB"],
    mon:["MON", "MATH.DB", "CHEM.UB", "MATH.AC", "BREAK", "PHY.AS", "ENG.GT", "PHY.PK" , "COM.AM","MATH.RM"],
    tues:["TUES","PHY.KG","NEP.DR","CHEM.SV","BREAK","CHEM.SB","MATH.RM","PHY.PK","COM.AM","CHEM.UB"],
    wed:["WED","PHY.KG","MATH.DB","CHEM.NH","BREAK","COM.AM","PHY.GS.PRACT","PHY.KG.PRACT","ENG.GT"],
    thur:["THUR","PHY.GS","NEP.DR","MATH.DB","BREAK","COM.AM","CHEM.UB.PRACT","CHEM.SB.PRACT","ENG.GT"],
    fri:["FRI","MATH.AC","NEP.DR","CHEM.SV","BREAK","COM.AM","COM.AM.PRACT","COM.AM.PRACT","ENG.GT"]
}


};

const timeRange=["XII" , "DAY" , "10:55-11:40"];


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


// testing gates for new command

app.get("/testing", function(req, res){
    res.render("inputPerUp",{url:"testing"});
});

app.post("/testing", function(req,res){
    
    const section = req.body.section;

    const sun0 = "SUN";
    const sunp1 = req.body.sunp1;
    const sunp2 = req.body.sunp2;
    const sunp3 = req.body.sunp3;
    const sunp4 = req.body.sunp4;
    const sunp5 = req.body.sunp5;
    const sunp6 = req.body.sunp6;
    const sunp7 = req.body.sunp7;
    const sunp8 = req.body.sunp8;
    const sunp9 = req.body.sunp9;
    const sunp10 = req.body.sunp10;
    

    const mon0 = "MON";
    const monp1 = req.body.monp1;
    const monp2 = req.body.monp2;
    const monp3 = req.body.monp3;
    const monp4 = req.body.monp4;
    const monp5 = req.body.monp5;
    const monp6 = req.body.monp6;
    const monp7 = req.body.monp7;
    const monp8 = req.body.monp8;
    const monp9 = req.body.monp9;

    const tue0 = "TUE";
    const tuep1 = req.body.tuep1;
    const tuep2 = req.body.tuep2;
    const tuep3 = req.body.tuep3;
    const tuep4 = req.body.tuep4;
    const tuep5 = req.body.tuep5;
    const tuep6 = req.body.tuep6;
    const tuep7 = req.body.tuep7;
    const tuep8 = req.body.tuep8;
    const tuep9 = req.body.tuep9; 

    const wed0 = "WED";
    const wedp1 = req.body.wedp1;
    const wedp2 = req.body.wedp2;
    const wedp3 = req.body.wedp3;
    const wedp4 = req.body.wedp4;
    const wedp5 = req.body.wedp5;
    const wedp6 = req.body.wedp6;
    const wedp7 = req.body.wedp7;
    const wedp8 = req.body.wedp8;
    const wedp9 = req.body.wedp9;

    const thu0 ="THU";
    const thup1 = req.body.thup1;
    const thup2 = req.body.thup2;
    const thup3 = req.body.thup3;
    const thup4 = req.body.thup4;
    const thup5 = req.body.thup5;
    const thup6 = req.body.thup6;
    const thup7 = req.body.thup7;
    const thup8 = req.body.thup8;
    const thup9 = req.body.thup9;

    const fri0 = "FRI";
    const frip1 = req.body.frip1;
    const frip2 = req.body.frip2;
    const frip3 = req.body.frip3;
    const frip4 = req.body.frip4;
    const frip5 = req.body.frip5;
    const frip6 = req.body.frip6;
    const frip7 = req.body.frip7;
    const frip8 = req.body.frip8;
    const frip9 = req.body.frip9;



    const input =  new Section({

        section : section,
        sun: [sun0, sunp1, sunp2, sunp3, sunp4, sunp5, sunp6, sunp7, sunp8, sunp9],
        mon: [mon0, monp1, monp2, monp3, monp4, monp5, monp6, monp7, monp8, monp9],
        tue: [tue0, tuep1, tuep2, tuep3, tuep4, tuep5, tuep6, tuep7, tuep8, tuep9],
        wed: [wed0, wedp1, wedp2, wedp3, wedp4, wedp5, wedp6, wedp7, wedp8, wedp9],
        thu: [thu0, thup1, thup2, thup3, thup4, thup5, thup6, thup7, thup8, thup9],
        fri: [fri0, frip1, frip2, frip3, frip4, frip5, frip6, frip7, frip8, frip9]
        
    });
    input.save();

res.redirect("/testing");

});






















//get work

// template to input data of teachers the teacher DataTransfer
app.get("/teacherInput",function(req,res){
    
    res.render("inputTeacher",{data : data, url: "/teacherInput"});
})

// removing the teacher name   from database
app.get("/removeTeacher", function(req,res){

    Teacher.find({}, function(err, founddata){

    res.render("teacherclearda",{teacher:founddata, url:"/removeTeacher"});
    
    });
});


app.get("/", function(req, res){
    res.render("landingpage",{url:"/"});
})

// selecting the option

app.get("/absent", function(req, res){
    absentTeacher =[];
    Teacher.find({subject : "CHEM"}, function(err, foundNameChem ){
        Teacher.find({subject : "PHY"}, function(err, foundNamePhy ){
            Teacher.find({subject : "MATH"}, function(err, foundNameMat ){
                Teacher.find({subject : "BIO"}, function(err, foundNameBio ){
                    Teacher.find({subject : "COM"}, function(err, foundNameCom ){
                        Teacher.find({subject : "ENG"}, function(err, foundNameEng ){
                            Teacher.find({subject : "NEP"}, function(err, foundNameNep ){
                                Absent.find({}, function(err,absentone){



                                    
                                absentone.forEach(function(abname){
                                    
                                    absentTeacher.push(abname.absentTeacher);
                                   
                                });


        res.render("teachExclude" , {teacherNameChem : foundNameChem,
            teacherNamePhy:foundNamePhy,
            teacherNameMat : foundNameMat,
            teacherNameBio : foundNameBio,
            teacherNameCom : foundNameCom,
            teacherNameEng : foundNameEng,
            teacherNameNep : foundNameNep,
            absentTeacher : absentTeacher,
             url:"/absent" });

    });
    });
    });
    });
    });
    });
    });
    });

    
    
});



// conformation page of absent teacher
app.get("/absentOne", function(req, res){
    Absent.find({}, function(err,absentone){
        
        res.render("absentConform" ,{absentTeacher:absentone, url:"/absentOne"} );
        
    })
   
})

//input teacher per section

app.get("/routine", function(req,res) {
    res.render("routine",{url:"/routine"});
});



app.get("/list", function(req, res){
    absentTeacher =[];
    A.find({}, function(err,ateach){
        B.find({}, function(err,bteach){
            C.find({}, function(err,cteach){
                D.find({}, function(err,dteach){
                    F.find({}, function(err,fteach){
                        G.find({}, function(err,gteach){
                            H.find({}, function(err,hteach){
                                Absent.find({}, function(err,absentone){
        
                                 
                                 
                                 ateach.forEach(function(nameList){

                                     asun =nameList.sun;
                                     amon =nameList.mon;
                                     atue =nameList.tue;
                                     awed =nameList.wed;
                                     athu =nameList.thu;
                                     afri =nameList.fri;

                                });


                                bteach.forEach(function(nameList){

                                    bsun =nameList.sun;
                                    bmon =nameList.mon;
                                    btue =nameList.tue;
                                    bwed =nameList.wed;
                                    bthu =nameList.thu;
                                    bfri =nameList.fri;

                               });





                               cteach.forEach(function(nameList){

                                csun =nameList.sun;
                                cmon =nameList.mon;
                                ctue =nameList.tue;
                                cwed =nameList.wed;
                                cthu =nameList.thu;
                                cfri =nameList.fri;

                           });



                           dteach.forEach(function(nameList){

                            dsun =nameList.sun;
                            dmon =nameList.mon;
                            dtue =nameList.tue;
                            dwed =nameList.wed;
                            dthu =nameList.thu;
                            dfri =nameList.fri;

                       });


                       fteach.forEach(function(nameList){

                        fsun =nameList.sun;
                        fmon =nameList.mon;
                        ftue =nameList.tue;
                        fwed =nameList.wed;
                        fthu =nameList.thu;
                        ffri =nameList.fri;

                   });


                   gteach.forEach(function(nameList){

                    gsun =nameList.sun;
                    gmon =nameList.mon;
                    gtue =nameList.tue;
                    gwed =nameList.wed;
                    gthu =nameList.thu;
                    gfri =nameList.fri;

               });


               hteach.forEach(function(nameList){

                hsun =nameList.sun;
                hmon =nameList.mon;
                htue =nameList.tue;
                hwed =nameList.wed;
                hthu =nameList.thu;
                hfri =nameList.fri;

           });



                                absentone.forEach(function(abname){
                                    
                                    absentTeacher.push(abname.absentTeacher);
                                   
                                });
                                console.log(absentTeacher);
                                

                                    res.render("tableManage", {
                                        
                                        teacher:teacher,
                                        pract:pract,
                                        timeRange:timeRange,
                                        asun:asun,
                                        amon:amon,
                                        atue:atue,
                                        awed:awed,
                                        athu:athu,
                                        afri:afri,

                                        bsun:bsun,
                                        bmon:bmon, 
                                        btue:btue, 
                                        bwed:bwed, 
                                        bthu:bthu, 
                                        bfri:bfri,
                                        
                                        
                                        csun:csun, 
                                        cmon:cmon, 
                                        ctue:ctue, 
                                        cwed:cwed, 
                                        cthu:cthu, 
                                        cfri:cfri,
                                        
                                        
                                        dsun:dsun, 
                                        dmon:dmon, 
                                        dtue:dtue, 
                                        dwed:dwed, 
                                        dthu:dthu, 
                                        dfri:dfri,

                                        fsun:fsun, 
                                        fmon:fmon, 
                                        ftue:ftue, 
                                        fwed:fwed, 
                                        fthu:fthu, 
                                        ffri:ffri,

                                        gsun:gsun, 
                                        gmon:gmon, 
                                        gtue:gtue, 
                                        gwed:gwed, 
                                        gthu:gthu, 
                                        gfri:gfri,

                                        hsun:hsun, 
                                        hmon:hmon, 
                                        htue:htue, 
                                        hwed:hwed, 
                                        hthu:hthu, 
                                        hfri:hfri, 
                                       
                                        absentone:absentone,
                                        absentTeacher:absentTeacher,
                                        url:"/list",



                                
                                    } );

                                 
                                 

                                    
                                    


                                });
                                    

                            });


                        });


                    });


                });


            });


        });   
    });
    
})



// abscent teacher routeing get req

app.get("/:customName", function(req,res){
    const customName=req.params.customName;
    console.log(customName);
    Teacher.findOne({name:customName} , function(err, foundlist){
        if(!err){
            res.render("teacherAsTemp" , { teacher : foundlist , url: "sdf"});
        }
    } )
})


// post request



app.post("/teacherInput", function(req,res){

    // posting the data in db 
    // if condition is remain for multiple data issue
    const inputname = req.body.teacherName;
    const inputphoneno= req.body.phone;
    const img = req.body.image;
    const sub = req.body.subject;
    const fname = req.body.fname;
    
    Teacher.findOne({name:inputname},function(err, foundList){
        if(!err){
            if(!foundList){
                const teacher = new Teacher({
                    name : inputname,
                    fullname: fname,
                    phone: inputphoneno,
                    subject: sub,
                    image: img
                });
             teacher.save();
                data=0;
                
                res.redirect("/teacherInput");
            }
            else{
                data=1;
                res.redirect("/teacherInput");
                
            }
        }
    });
    
});

    // absent teacher checkbox req
app.post("/absent",function(req, res){
    
    const absteach=req.body.teacher;

    Absent.findOne({absentTeacher : absteach} , function(err, abslist){
        if(!err){
            if(!abslist){
                const absent = new Absent({
                    absentTeacher: absteach
                });
                absent.save();
            }
        }
    } );
  
    res.redirect("/absent");
});

// remove the teacher from abssent list
app.post("/delete" , function(req, res){
    const removeItem = req.body.checkbox;
    Absent.findByIdAndRemove(removeItem, function(err){
        if(err){
            console.log(err);
            res.redirect("/absentOne");
        }else{
            
            res.redirect("/absentOne");
        }
    });
});


app.post("/deleteCh", function(req, res){
    const removeItem = req.body.teacher;

        Absent.findOneAndDelete({absentTeacher:removeItem}, function(err){
        if(err){
            console.log(err);
            res.redirect("/absent");
        }else{
            console.log(removeItem);
            res.redirect("/absent");
        }
    });

});


app.post("/deleteteach", function(req,res){
    const removeItem = req.body.checkbox;
    Teacher.findByIdAndRemove(removeItem, function(err){
        if(err){
            console.log(err);
            res.redirect("/removeTeacher");
        }else{
            res.redirect("/removeTeacher");
        }
    })
    
});

app.post("/routine", function(req,res){
    const section = req.body.section;
    const week = req.body.week;

    const sun0 = "SUN";
    const sunp1 = req.body.sunp1;
    const sunp2 = req.body.sunp2;
    const sunp3 = req.body.sunp3;
    const sunp4 = req.body.sunp4;
    const sunp5 = req.body.sunp5;
    const sunp6 = req.body.sunp6;
    const sunp7 = req.body.sunp7;
    const sunp8 = req.body.sunp8;
    const sunp9 = req.body.sunp9;
    const sunp10 = req.body.sunp10;
    

    const mon0 = "MON";
    const monp1 = req.body.monp1;
    const monp2 = req.body.monp2;
    const monp3 = req.body.monp3;
    const monp4 = req.body.monp4;
    const monp5 = req.body.monp5;
    const monp6 = req.body.monp6;
    const monp7 = req.body.monp7;
    const monp8 = req.body.monp8;
    const monp9 = req.body.monp9;

    const tue0 = "TUE";
    const tuep1 = req.body.tuep1;
    const tuep2 = req.body.tuep2;
    const tuep3 = req.body.tuep3;
    const tuep4 = req.body.tuep4;
    const tuep5 = req.body.tuep5;
    const tuep6 = req.body.tuep6;
    const tuep7 = req.body.tuep7;
    const tuep8 = req.body.tuep8;
    const tuep9 = req.body.tuep9; 

    const wed0 = "WED";
    const wedp1 = req.body.wedp1;
    const wedp2 = req.body.wedp2;
    const wedp3 = req.body.wedp3;
    const wedp4 = req.body.wedp4;
    const wedp5 = req.body.wedp5;
    const wedp6 = req.body.wedp6;
    const wedp7 = req.body.wedp7;
    const wedp8 = req.body.wedp8;
    const wedp9 = req.body.wedp9;

    const thu0 ="THU";
    const thup1 = req.body.thup1;
    const thup2 = req.body.thup2;
    const thup3 = req.body.thup3;
    const thup4 = req.body.thup4;
    const thup5 = req.body.thup5;
    const thup6 = req.body.thup6;
    const thup7 = req.body.thup7;
    const thup8 = req.body.thup8;
    const thup9 = req.body.thup9;

    const fri0 = "FRI";
    const frip1 = req.body.frip1;
    const frip2 = req.body.frip2;
    const frip3 = req.body.frip3;
    const frip4 = req.body.frip4;
    const frip5 = req.body.frip5;
    const frip6 = req.body.frip6;
    const frip7 = req.body.frip7;
    const frip8 = req.body.frip8;
    const frip9 = req.body.frip9;


   switch (section){
    
    case 'a':
        const ateach =  new A({
            sun: [sun0, sunp1, sunp2, sunp3, sunp4, sunp5, sunp6, sunp7, sunp8, sunp9],
            mon: [mon0, monp1, monp2, monp3, monp4, monp5, monp6, monp7, monp8, monp9],
            tue: [tue0, tuep1, tuep2, tuep3, tuep4, tuep5, tuep6, tuep7, tuep8, tuep9],
            wed: [wed0, wedp1, wedp2, wedp3, wedp4, wedp5, wedp6, wedp7, wedp8, wedp9],
            thu: [thu0, thup1, thup2, thup3, thup4, thup5, thup6, thup7, thup8, thup9],
            fri: [fri0, frip1, frip2, frip3, frip4, frip5, frip6, frip7, frip8, frip9]
        });
        ateach.save();
        break;
    
        case 'b':
        const bteach =  new B({
            sun: [sun0, sunp1, sunp2, sunp3, sunp4, sunp5, sunp6, sunp7, sunp8, sunp9],
            mon: [mon0, monp1, monp2, monp3, monp4, monp5, monp6, monp7, monp8, monp9],
            tue: [tue0, tuep1, tuep2, tuep3, tuep4, tuep5, tuep6, tuep7, tuep8, tuep9],
            wed: [wed0, wedp1, wedp2, wedp3, wedp4, wedp5, wedp6, wedp7, wedp8, wedp9],
            thu: [thu0, thup1, thup2, thup3, thup4, thup5, thup6, thup7, thup8, thup9],
            fri: [fri0, frip1, frip2, frip3, frip4, frip5, frip6, frip7, frip8, frip9]
        });
        bteach.save();
        break;

        case 'c':
        const cteach =  new C({
            sun: [sun0, sunp1, sunp2, sunp3, sunp4, sunp5, sunp6, sunp7, sunp8, sunp9],
            mon: [mon0, monp1, monp2, monp3, monp4, monp5, monp6, monp7, monp8, monp9],
            tue: [tue0, tuep1, tuep2, tuep3, tuep4, tuep5, tuep6, tuep7, tuep8, tuep9],
            wed: [wed0, wedp1, wedp2, wedp3, wedp4, wedp5, wedp6, wedp7, wedp8, wedp9],
            thu: [thu0, thup1, thup2, thup3, thup4, thup5, thup6, thup7, thup8, thup9],
            fri: [fri0, frip1, frip2, frip3, frip4, frip5, frip6, frip7, frip8, frip9]
        });
        cteach.save();
        break;

        case 'd':
        const dteach =  new D({
            sun: [sun0, sunp1, sunp2, sunp3, sunp4, sunp5, sunp6, sunp7, sunp8, sunp9],
            mon: [mon0, monp1, monp2, monp3, monp4, monp5, monp6, monp7, monp8, monp9],
            tue: [tue0, tuep1, tuep2, tuep3, tuep4, tuep5, tuep6, tuep7, tuep8, tuep9],
            wed: [wed0, wedp1, wedp2, wedp3, wedp4, wedp5, wedp6, wedp7, wedp8, wedp9],
            thu: [thu0, thup1, thup2, thup3, thup4, thup5, thup6, thup7, thup8, thup9],
            fri: [fri0, frip1, frip2, frip3, frip4, frip5, frip6, frip7, frip8, frip9]
        });
        dteach.save();
        break;

        case 'f':
        const fteach =  new F({
            sun: [sun0, sunp1, sunp2, sunp3, sunp4, sunp5, sunp6, sunp7, sunp8, sunp9],
            mon: [mon0, monp1, monp2, monp3, monp4, monp5, monp6, monp7, monp8, monp9],
            tue: [tue0, tuep1, tuep2, tuep3, tuep4, tuep5, tuep6, tuep7, tuep8, tuep9],
            wed: [wed0, wedp1, wedp2, wedp3, wedp4, wedp5, wedp6, wedp7, wedp8, wedp9],
            thu: [thu0, thup1, thup2, thup3, thup4, thup5, thup6, thup7, thup8, thup9],
            fri: [fri0, frip1, frip2, frip3, frip4, frip5, frip6, frip7, frip8, frip9]
        });
        fteach.save();
        break;

        case 'g':
        const gteach =  new G({
            sun: [sun0, sunp1, sunp2, sunp3, sunp4, sunp5, sunp6, sunp7, sunp8, sunp9],
            mon: [mon0, monp1, monp2, monp3, monp4, monp5, monp6, monp7, monp8, monp9],
            tue: [tue0, tuep1, tuep2, tuep3, tuep4, tuep5, tuep6, tuep7, tuep8, tuep9],
            wed: [wed0, wedp1, wedp2, wedp3, wedp4, wedp5, wedp6, wedp7, wedp8, wedp9],
            thu: [thu0, thup1, thup2, thup3, thup4, thup5, thup6, thup7, thup8, thup9],
            fri: [fri0, frip1, frip2, frip3, frip4, frip5, frip6, frip7, frip8, frip9]
        });
        gteach.save();
        break;


        case 'h':
        const hteach =  new H({
            sun: [sun0, sunp1, sunp2, sunp3, sunp4, sunp5, sunp6, sunp7, sunp8, sunp9],
            mon: [mon0, monp1, monp2, monp3, monp4, monp5, monp6, monp7, monp8, monp9],
            tue: [tue0, tuep1, tuep2, tuep3, tuep4, tuep5, tuep6, tuep7, tuep8, tuep9],
            wed: [wed0, wedp1, wedp2, wedp3, wedp4, wedp5, wedp6, wedp7, wedp8, wedp9],
            thu: [thu0, thup1, thup2, thup3, thup4, thup5, thup6, thup7, thup8, thup9],
            fri: [fri0, frip1, frip2, frip3, frip4, frip5, frip6, frip7, frip8, frip9]
        });
        hteach.save();
        break;

   }
        res.redirect("/routine")
    });




    


app.listen(process.env.PORT || 3000, function () {
  console.log("server is started at port 3000");
});