
var contactusmodal = `
    <div class="modal fade" id="contactusmodal" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Contact Us</h4>
                </div>
                <div class="modal-body contactusmodalbody">
                    <div class="pad10">
                        <input type="text" class="form-control inputstyle" placeholder="Name">
                    </div>
                    <div class="pad10">
                        <input type="text" class="form-control inputstyle" placeholder="Email addresses">
                    </div>
                    <div class="pad10">
                        <textarea rows="4" cols="50" placeholder="Type your message Here ..." class="form-control inputstyle" style="resize: none"></textarea>
                    </div>

                    <div class="pad10 alignrgt">
                        <button class="contactussubmitbtn" type="button" data-dismiss="modal">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

var login = `
    <div class="modal fade" id="loginmodal" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Login</h4>
                </div>
                <div class="modal-body contactusmodalbody">
                    <p class="lineheight30 pad10">Did you <a  onclick="forgotpassmodalopen()">forgot your password </a> ?</p>
                    <div class="pad10">
                        <input type="text" class="form-control inputstyle" placeholder="Email addresses">
                    </div>
                    <div class="pad10">
                        <input type="password" class="form-control inputstyle" placeholder="Password">
                    </div>
                    <div class="pad10 alignrgt">
                        <button class="loginbtn" type="button" data-dismiss="modal">Login</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;
var forgotpassword = `
    <div class="modal fade" id="forgotpassmodal" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Forgot Password</h4>
                </div>
                <div class="modal-body contactusmodalbody">
                    <div class="emaildiv">                                      
                        <div class="pad10">
                            <input type="text" class="form-control inputstyle" placeholder="Email address">
                        </div>
                        <div class="pad10 alignrgt">
                            <button class="requestotpbtn" type="button" >Request Otp</button>
                        </div>
                    </div>
                    <div class="otpdiv">
                        <div class="pad10">
                            <input type="text" class="form-control inputstyle" placeholder="OTP">
                        </div>
                        <div class="pad10 alignrgt">
                            <button class="changepasswordbtn" type="button">Change Password</button>
                        </div>
                    </div>
                    <div class="passworddiv">
                        <div class="pad10">
                            <input type="password" class="form-control inputstyle" placeholder="Password">
                        </div> 
                        <div class="pad10">
                            <input type="password" class="form-control inputstyle" placeholder="Retype Password">
                        </div>
                        <div class="pad10 alignrgt">
                            <button class="forgotpasssubmitbtn" type="button" data-dismiss="modal">Submit</button>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    </div>
`;
var signup = `
    <div class="modal fade" id="signupmodal" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Sign Up</h4>
                </div>
                <div class="modal-body contactusmodalbody">
                    <div class="pad10">
                        <input type="text" class="form-control inputstyle" placeholder="Name">
                    </div>
                    <div class="pad10">
                        <input type="text" class="form-control inputstyle" placeholder="Email addresses">
                    </div>
                    <div class="pad10">
                        <input type="password" class="form-control inputstyle" placeholder="Password">
                    </div> 
                    <div class="pad10">
                        <input type="password" class="form-control inputstyle" placeholder="Retype Password">
                    </div>
                    <div class="pad10 alignrgt">
                        <button class="signupbtn" type="button" data-dismiss="modal">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

`;

let actparatr = `
    <tr>
        <td><input type="checkbox"></td>
        <td><input type="text" class="form-control inputstyle"></td>
        <td>
            <input type="text" class="form-control inputstyle" list="browsers">
            <datalist id="browsers">
                <option value="Internet Explorer">
                <option value="Firefox">
                <option value="Google Chrome">
                <option value="Opera">
                <option value="Safari">
            </datalist>
        </td>
        <td><input type="text" class="form-control inputstyle"></td>
        <td><input type="text" class="form-control inputstyle"></td>
        <td><i class="far fa-trash-alt actparatablefaicon"></i></td>
    </tr>
`;
var responsetr = `
    <tr>
        <td><input type="text" class="form-control inputstyle"></td>                                          
        <td><i class="far fa-trash-alt responsetablefaicon"></i></td>
    </tr>
`;
$(document).ready(function () {
    $('body').append(contactusmodal, login, signup, forgotpassword);
    $('.otpdiv,.passworddiv, #scrolltop, .outerchatbotdiv,.intentparadiv, #createprojectdivdeveloper,#createprojectdivcustomer,#intentcontainer,#entitycontainer,#trainingphrasecontainer,#actionparacontainer,#responsecontainer,#nodetailscontainer').hide();
    $('.requestotpbtn').click(function () {
        $('.emaildiv,.passworddiv').hide();
        $('.otpdiv').show();
    });
    $('.changepasswordbtn').click(function () {
        $('.emaildiv,.otpdiv').hide();
        $('.passworddiv').show();
    });
    $("#scrolltop").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 400) {
            $('.navbar').addClass('fixednavbar');
            $('#scrolltop').show();
        } else {
            $('.navbar').removeClass('fixednavbar');
            $('#scrolltop').hide();
        }
    });
    $('.loginbtn').click(function () {
        location.href = 'http://127.0.0.1:5500/pages/createproject/createproject.html';
    });
    document.querySelectorAll('a[href^=""]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar, #content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
    $('.actparaaddbtn').click(function () {
        $('.actparatbody').append(actparatr);
        actparatabletrdelete();
    });
    $('.responseaddbtn').click(function () {
        $('.responsetbody').append(responsetr);
        responsetabletrdelete();
    });
    actparatabletrdelete();
    responsetabletrdelete();
	
});


function forgotpassmodalopen() {
    $('#forgotpassmodal').modal('show');
    $('.otpdiv,.passworddiv').hide();
    $('.emaildiv').show();
    $('#loginmodal').modal('hide');
}

function createnewprojectdivopen() {
    $('.createnewprojectdiv').css('left', '0px');
}

function createnewprojectdivclose() {
    $('.createnewprojectdiv').css('left', '-300px');
}

function develpoermode() {
    $('.developermodebtn').addClass('enable');
    $('.customermodebtn').removeClass('enable');
    $('#createprojectdivcustomer').hide();
    $('#createprojectdivdeveloper').show();
    $('html, body').animate({
        scrollTop: $("#createprojectdivdeveloper").offset().top
    }, 2000);
    $('.modetxt').text('Developer');
    
}
function customermode() {
    $('.customermodebtn').addClass('enable');
    $('.developermodebtn').removeClass('enable');
    $('#createprojectdivdeveloper').hide();
    $('#createprojectdivcustomer').show();
    $('html, body').animate({
        scrollTop: $("#createprojectdivcustomer").offset().top
    }, 2000);
    $('.modetxt').text('Customer');
}

function gotodashboard() {
    location.href = './../dashboard/dashboard.html';
}

function chatscrollbtm() {
    var wtf = $('.centerchatdiv');
    var height = wtf[0].scrollHeight;
    wtf.scrollTop(height);
}

function chatbotopen() {
    $('.chatbotwithbgdiv').hide();
    $('.outerchatbotdiv').slideDown();
    chatscrollbtm();
}

function chatbotclose() {
    $('.chatbotwithbgdiv').show();
    $('.outerchatbotdiv,.intentparadiv').slideUp();
}

function actparatabletrdelete() {
    $('.actparatablefaicon').each(function () {
        $(this).click(function () {
            $(this).parent().parent().remove();
        });
    });
}

function responsetabletrdelete() {
    $('.responsetablefaicon').each(function () {
        $(this).click(function () {
            $(this).parent().parent().remove();
        });
    });
}

function selectedcontaineropen(selectedcontainer) {
    event.preventDefault();
    $('#agentcontainer,#intentcontainer,#entitycontainer,#trainingphrasecontainer,#actionparacontainer,#responsecontainer,#nodetailscontainer').hide();
    $('#'+selectedcontainer).show();
}

function intentparatoggle(){
    var iconchange = $(".intentparadivopenicon").hasClass("fa-angle-up");
    if(iconchange === true){
        $('.intentparadivopenicon').addClass('fa-angle-down');
        $('.intentparadivopenicon').removeClass('fa-angle-up');
    }else{
        $('.intentparadivopenicon').addClass('fa-angle-up');
        $('.intentparadivopenicon').removeClass('fa-angle-down');
    }    
    $('.intentparadiv').slideToggle();
}