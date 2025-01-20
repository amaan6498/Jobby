(this["webpackJsonpjobby-app"]=this["webpackJsonpjobby-app"]||[]).push([[0],{40:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),c=a(31),i=a.n(c),r=a(6),o=a(4),l=a(10),j=a(13),d=a(14),b=a(15),m=a(17),h=a(16),p=a(7),u=a.n(p),O=(a(40),a(1)),f=function(e){function t(){var e;Object(d.a)(this,t);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=Object(m.a)(this,t,[].concat(n))).state={username:"",password:"",errorMessage:"",showAlert:!1},e.showAlertWithTimer=function(){e.setState({showAlert:!0}),setTimeout((function(){e.setState({showAlert:!1})}),5e3)},e.setCookie=function(t){var a=e.props.history;u.a.set("jwt_token",t,{expires:3}),a.replace("/")},e.onChangeUsername=function(t){e.setState({username:t.target.value})},e.onChangePassword=function(t){e.setState({password:t.target.value})},e.onSubmit=function(){var t=Object(j.a)(Object(l.a)().mark((function t(a){var n,s,c,i,r,o,j;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=e.state,s=n.username,c=n.password,i={username:s,password:c},r={method:"POST",body:JSON.stringify(i)},t.next=7,fetch("https://apis.ccbp.in/login",r);case 7:return o=t.sent,t.next=10,o.json();case 10:j=t.sent,o.ok?(console.log("Login Success"),e.setCookie(j.jwt_token)):e.setState({errorMessage:j.error_msg});case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(h.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){this.showAlertWithTimer()}},{key:"render",value:function(){var e=this.state,t=e.errorMessage,a=e.showAlert;return void 0!==u.a.get("jwt_token")?Object(O.jsx)(o.a,{to:"/"}):Object(O.jsxs)("div",{className:"app-container",children:[Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/logo-img.png",alt:"website logo",className:"logo-img"}),Object(O.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(O.jsx)("label",{htmlFor:"username",className:"label-for-login",children:"USERNAME"}),Object(O.jsx)("input",{id:"username",placeholder:"Username",onChange:this.onChangeUsername}),Object(O.jsx)("label",{htmlFor:"password",className:"label-for-login",children:"PASSWORD"}),Object(O.jsx)("input",{id:"password",placeholder:"Password",type:"password",onChange:this.onChangePassword}),Object(O.jsx)("button",{type:"submit",className:"login-btn",children:"Login"}),t&&Object(O.jsx)("p",{className:"error-message",children:"*".concat(t)})]})]}),a&&Object(O.jsx)("div",{className:"custom-alert",children:Object(O.jsxs)("p",{children:["Sample Username: rahul ",Object(O.jsx)("br",{}),"Sample Password: rahul@2021"]})})]})}}])}(n.Component),x=Object(o.g)(f),g=(a(47),Object(o.g)((function(e){return Object(O.jsxs)("div",{className:"nav-container",children:[Object(O.jsx)(r.b,{to:"/",className:"link-item",children:Object(O.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/logo-img.png",alt:"website logo",className:"header-logo"})}),Object(O.jsx)("nav",{children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsx)(r.b,{to:"/",className:"link-style",children:"Home"})}),Object(O.jsx)("li",{children:Object(O.jsx)(r.b,{to:"/jobs",className:"link-style",children:"Jobs"})})]})}),Object(O.jsx)("button",{type:"button",onClick:function(){var t=e.history;u.a.remove("jwt_token"),t.replace("/login")},children:"Logout"})]})}))),y=(a(48),Object(o.g)((function(){return Object(O.jsxs)("div",{className:"home-container",children:[Object(O.jsx)(g,{}),Object(O.jsxs)("div",{className:"text-container",children:[Object(O.jsx)("h1",{className:"header-text",children:"Find The Job That Fits Your Life"}),Object(O.jsx)("p",{className:"para-text ",children:"Millions of people are searching for jobs, salary information, company reviews. Find the job that fits your abilities and potential."}),Object(O.jsx)(r.b,{to:"/jobs",className:"find-button",children:Object(O.jsx)("button",{type:"button",children:"Find Jobs"})})]})]})}))),N=a(34),v=a(21),k=a(19),S=a.n(k),w=(a(67),"INITIAL"),_="INPROGRESS",I="SUCCESS",L="FAILURE",T=function(e){function t(){var e;Object(d.a)(this,t);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=Object(m.a)(this,t,[].concat(n))).state={apiStatus:w,dataList:[]},e.getProfileApi=Object(j.a)(Object(l.a)().mark((function t(){var a,n,s,c,i;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({apiStatus:_}),a=u.a.get("jwt_token"),n={headers:{Authorization:"Bearer ".concat(a)},method:"GET"},t.next=6,fetch("https://apis.ccbp.in/profile",n);case 6:if(!(s=t.sent).ok){t.next=15;break}return t.next=10,s.json();case 10:c=t.sent,i={name:c.profile_details.name,profileImageUrl:c.profile_details.profile_image_url,shortBio:c.profile_details.short_bio},e.setState({dataList:i,apiStatus:I}),t.next=16;break;case 15:e.setState({apiStatus:L});case 16:case"end":return t.stop()}}),t)}))),e.renderLoadingView=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"loader-container","data-testid":"loader",children:Object(O.jsx)(S.a,{type:"ThreeDots",color:"#ffffff",height:"50",width:"50"})})})},e.renderFailureView=function(){return Object(O.jsx)("div",{className:"failure-view-container",children:Object(O.jsx)("button",{type:"button","data-testid":"button",className:"job-item-failure-button",onClick:e.getProfileApi,children:"Retry"})})},e.renderProfile=function(){var t=e.state.dataList;return Object(O.jsxs)("div",{className:"profile-container",children:[Object(O.jsx)("img",{src:t.profileImageUrl,className:"profile-img",alt:"profile"}),Object(O.jsx)("h1",{className:"profile-head",children:t.name}),Object(O.jsx)("p",{className:"profile-para",children:t.shortBio})]})},e}return Object(h.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){this.getProfileApi()}},{key:"render",value:function(){switch(this.state.apiStatus){case I:return this.renderProfile();case _:return this.renderLoadingView();case L:return this.renderFailureView();default:return null}}}])}(n.Component),C=T,A=a(20),D=a(29),F=(a(68),function(e){var t=e.jobDetails,a=t.title,n=t.companyLogoUrl,s=t.rating,c=t.employmentType,i=t.location,o=t.id,l=t.packagePerAnnum,j=t.jobDescription;return Object(O.jsx)(r.b,{to:"/jobs/".concat(o),className:"link-item",children:Object(O.jsxs)("li",{className:"job-list-items",children:[Object(O.jsxs)("div",{className:"company-container",children:[Object(O.jsx)("div",{children:Object(O.jsx)("img",{src:n,alt:"company logo",className:"logo-url"})}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{className:"company-title",children:a}),Object(O.jsxs)("div",{className:"star-icon-container",children:[Object(O.jsx)(A.a,{className:"star-icon"}),Object(O.jsx)("p",{className:"rating-count",children:s})]})]})]}),Object(O.jsxs)("div",{className:"location-container-flex-content",children:[Object(O.jsxs)("div",{className:"location-desc",children:[Object(O.jsxs)("div",{className:"star-icon-container",children:[Object(O.jsx)(D.a,{className:"location-icon"}),Object(O.jsx)("p",{className:"location-desc description",children:i})]}),Object(O.jsxs)("div",{className:"star-icon-container",children:[Object(O.jsx)(D.b,{className:"location-icon left-icon"}),Object(O.jsx)("p",{className:"emp-type description",children:c})]})]}),Object(O.jsx)("div",{className:"star-icon-container",children:Object(O.jsx)("p",{className:"package-desc description",children:l})})]}),Object(O.jsx)("hr",{className:"line"}),Object(O.jsx)("h1",{className:"desc-heading",children:"Description"}),Object(O.jsx)("p",{className:"job-description",children:j})]})})}),U=(a(69),[{label:"Full Time",employmentTypeId:"FULLTIME"},{label:"Part Time",employmentTypeId:"PARTTIME"},{label:"Freelance",employmentTypeId:"FREELANCE"},{label:"Internship",employmentTypeId:"INTERNSHIP"}]),R=[{salaryRangeId:"1000000",label:"10 LPA and above"},{salaryRangeId:"2000000",label:"20 LPA and above"},{salaryRangeId:"3000000",label:"30 LPA and above"},{salaryRangeId:"4000000",label:"40 LPA and above"}],E="INITIAL",P="INPROGRESS",J="SUCCESS",V="FAILURE",W=function(e){function t(){var e;Object(d.a)(this,t);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=Object(m.a)(this,t,[].concat(n))).state={typeOfEmp:[],salary:[],search:"",listOfJobs:[],apiStatus:E},e.handleUrl=Object(j.a)(Object(l.a)().mark((function t(){var a,n,s,c,i,r,o,j,d,b;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({apiStatus:P}),a=u.a.get("jwt_token"),n=e.state,s=n.typeOfEmp,c=n.salary,i=n.search,r="https://apis.ccbp.in/jobs?employment_type=".concat(s.join(","),"&minimum_package=").concat(c,"&search=").concat(i),o={headers:{Authorization:"Bearer ".concat(a)},method:"GET"},t.next=7,fetch(r,o);case 7:if(!0!==(j=t.sent).ok){t.next=16;break}return t.next=11,j.json();case 11:d=t.sent,b=d.jobs.map((function(e){return{companyLogoUrl:e.company_logo_url,employmentType:e.employment_type,id:e.id,jobDescription:e.job_description,location:e.location,packagePerAnnum:e.package_per_annum,rating:e.rating,title:e.title}})),e.setState({listOfJobs:b,apiStatus:J}),t.next=17;break;case 16:e.setState({apiStatus:V});case 17:case"end":return t.stop()}}),t)}))),e.handleCheckChange=function(t){var a=t.target.value;e.setState((function(e){var t=e.typeOfEmp;return t.includes(a)?{typeOfEmp:t.filter((function(e){return e!==a}))}:{typeOfEmp:[].concat(Object(N.a)(t),[a])}}),e.handleUrl)},e.handleRadioChange=function(t){e.setState({salary:t.target.value},e.handleUrl)},e.handleSearchChange=function(t){e.setState({search:t.target.value})},e.handleKeyDown=function(t){"Enter"===t.key&&e.handleUrl()},e.handleSeachClick=function(){""!==e.state.search&&e.handleUrl()},e.renderTypeOfEmployement=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("hr",{className:"horizontal-row"}),Object(O.jsx)("h4",{className:"sidebar-head",children:"Type of Employment"}),Object(O.jsx)("ul",{children:U.map((function(t){return Object(O.jsxs)("li",{children:[Object(O.jsx)("input",{type:"checkbox",id:t.employmentTypeId,name:t.employmentTypeId,value:t.employmentTypeId,onChange:e.handleCheckChange}),Object(O.jsx)("label",{className:"emp-label",htmlFor:t.employmentTypeId,children:t.label})]},t.employmentTypeId)}))})]})},e.renderSalaryRange=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("hr",{className:"horizontal-row"}),Object(O.jsx)("h4",{className:"sidebar-head",children:"Salary Range"}),Object(O.jsx)("ul",{children:R.map((function(t){return Object(O.jsxs)("li",{children:[Object(O.jsx)("input",{type:"radio",id:t.salaryRangeId,name:"salaryRange",value:t.salaryRangeId,onChange:e.handleRadioChange}),Object(O.jsx)("label",{className:"emp-label",htmlFor:t.salaryRangeId,children:t.label})]},t.salaryRangeId)}))})]})},e.renderJobsList=function(){var t=e.state.listOfJobs;return t.length>0?Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("ul",{className:"job-details-item-container",children:t.map((function(e){return Object(O.jsx)(F,{jobDetails:e},e.id)}))})}):Object(O.jsxs)("div",{className:"no-jobs-container",children:[Object(O.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/no-jobs-img.png",alt:"no jobs",className:"no-jobs"}),Object(O.jsx)("h1",{className:"no-jobs-heading",children:"No Jobs Found"}),Object(O.jsx)("p",{className:"no-jobs-desc",children:"We could not find any jobs. Try other filters."})]})},e.renderLoadingView=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"loader-container","data-testid":"loader",children:Object(O.jsx)(S.a,{type:"ThreeDots",color:"#ffffff",height:"50",width:"50"})})})},e.renderPrimeDealsFailureView=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"failure-container",children:[Object(O.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/failure-img.png",alt:"failure view",className:"failure-view"}),Object(O.jsx)("h1",{className:"failure-heading",children:"Oops! Something Went Wrong"}),Object(O.jsx)("p",{className:"failure-desc",children:"We cannot seem to find the page you are looking for"}),Object(O.jsx)("button",{type:"button","data-testid":"button",className:"jobs-failure-button",onClick:e.handleUrl,children:"Retry"})]})})},e.renderBasedOnApi=function(){switch(e.state.apiStatus){case J:return e.renderJobsList();case V:return e.renderPrimeDealsFailureView();case P:return e.renderLoadingView();default:return null}},e.renderSearchBar=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"search-container",children:[Object(O.jsx)("input",{type:"search",placeholder:"Search",className:"search-input",onChange:e.handleSearchChange,onKeyDown:e.handleKeyDown}),Object(O.jsx)("button",{type:"button","data-testid":"searchButton",onClick:e.handleSeachClick,children:Object(O.jsx)(v.b,{className:"search-icon"})})]}),Object(O.jsx)("div",{children:e.renderBasedOnApi()})]})},e}return Object(h.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){this.handleUrl()}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"job-container",children:[Object(O.jsx)(g,{}),Object(O.jsxs)("div",{className:"jobs-page",children:[Object(O.jsxs)("div",{className:"side-bar",children:[Object(O.jsx)(C,{}),this.renderTypeOfEmployement(),this.renderSalaryRange()]}),Object(O.jsx)("div",{className:"jobs-home-page",children:this.renderSearchBar()})]})]})}}])}(n.Component),M=W,B=a(23),G=a(33),z=(a(70),function(e){var t=e.skillDetails,a=t.id,n=t.name,s=t.imageUrl;return Object(O.jsx)("li",{className:"skill-list-items",children:Object(O.jsxs)("div",{className:"skill-container",children:[Object(O.jsx)("img",{src:s,alt:n,className:"skill-image"}),Object(O.jsx)("p",{className:"image-name",children:n})]})},a)}),K=(a(71),function(e){var t=e.jobDetails,a=t.id,n=t.companyLogoUrl,s=t.employmentType,c=t.jobDescription,i=t.location,r=t.title,o=t.rating;return Object(O.jsxs)("li",{className:"similar-job-div",children:[Object(O.jsxs)("div",{className:"first-container",children:[Object(O.jsx)("img",{src:n,className:"logo-jobs-details",alt:"similar job company logo"}),Object(O.jsxs)("div",{className:"first-inner-container",children:[Object(O.jsx)("h3",{children:r}),Object(O.jsxs)("div",{className:"second-inner-container",children:[Object(O.jsx)(A.a,{className:"aifill"}),Object(O.jsx)("p",{children:o})]})]})]}),Object(O.jsx)("h2",{className:"dec-similar",children:"Description"}),Object(O.jsx)("p",{children:c}),Object(O.jsxs)("div",{className:"second-container",children:[Object(O.jsx)(B.a,{className:"inner-icon"}),Object(O.jsx)("p",{children:i}),Object(O.jsx)(v.a,{className:"inner-icon"}),Object(O.jsx)("p",{children:s})]})]},a)}),H=(a(72),"INITIAL"),q="INPROGRESS",Y="SUCCESS",Q="FAILURE",X=function(e){function t(){var e;Object(d.a)(this,t);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=Object(m.a)(this,t,[].concat(n))).state={jobList:{},similarJobList:[],apiStatus:H},e.getFormattedSkillData=function(e){return{companyLogoUrl:e.company_logo_url,employmentType:e.employment_type,jobDescription:e.job_description,id:e.id,rating:e.rating,location:e.location,title:e.title}},e.getFormattedData=function(e){return{companyLogoUrl:e.company_logo_url,companyWebsiteUrl:e.company_website_url,employmentType:e.employment_type,id:e.id,jobDescription:e.job_description,lifeAtCompany:{description:e.life_at_company.description,imageUrl:e.life_at_company.image_url},location:e.location,rating:e.rating,title:e.title,packagePerAnnum:e.package_per_annum,skills:e.skills.map((function(e){return{imageUrl:e.image_url,name:e.name}}))}},e.getJobDetails=Object(j.a)(Object(l.a)().mark((function t(){var a,n,s,c,i,r,o,j,d,b;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({apiStatus:q}),a=e.props.match,n=a.params,s=n.id,c=u.a.get("jwt_token"),i="https://apis.ccbp.in/jobs/".concat(s),r={headers:{Authorization:"Bearer ".concat(c)},method:"GET"},t.next=9,fetch(i,r);case 9:if(!0!==(o=t.sent).ok){t.next=19;break}return t.next=13,o.json();case 13:j=t.sent,d=e.getFormattedData(j.job_details),b=j.similar_jobs.map((function(t){return e.getFormattedSkillData(t)})),e.setState({jobList:d,similarJobList:b,apiStatus:Y}),t.next=20;break;case 19:e.setState({apiStatus:Q});case 20:case"end":return t.stop()}}),t)}))),e.renderJobItemDetails=function(){var t=e.state,a=t.jobList,n=t.similarJobList,s=a.companyLogoUrl,c=a.companyWebsiteUrl,i=a.employmentType,r=a.jobDescription,o=a.location,l=a.title,j=a.rating,d=a.packagePerAnnum,b=a.lifeAtCompany,m=a.skills,h=b.description,p=b.imageUrl;return Object(O.jsxs)("div",{className:"full-job-item-container",children:[Object(O.jsxs)("div",{className:"job-items-container",children:[Object(O.jsxs)("div",{className:"logo-image-container",children:[Object(O.jsx)("img",{src:s,alt:"job details company logo",className:"company-logo-justify"}),Object(O.jsxs)("div",{className:"title-container",children:[Object(O.jsx)("h1",{className:"company-title-head",children:l}),Object(O.jsxs)("div",{className:"rating-container",children:[Object(O.jsx)(A.a,{className:"star-icon"}),Object(O.jsx)("p",{className:"count-rating",children:j})]})]})]}),Object(O.jsxs)("div",{className:"location-type-salary-container",children:[Object(O.jsxs)("div",{className:"location-container",children:[Object(O.jsxs)("div",{className:"responsive",children:[Object(O.jsx)(B.a,{className:"location-logo"}),Object(O.jsx)("p",{className:"location-desc",children:o})]}),Object(O.jsxs)("div",{className:"responsive",children:[Object(O.jsx)(v.a,{className:"location-logo-brief"}),Object(O.jsx)("p",{className:"location-desc",children:i})]})]}),Object(O.jsx)("p",{className:"package-desc",children:d})]}),Object(O.jsx)("hr",{className:"line"}),Object(O.jsxs)("div",{className:"description-container",children:[Object(O.jsx)("h1",{className:"desc-heading",children:"Description"}),Object(O.jsxs)("a",{className:"visit-link",href:c,target:"__blank",children:["Visit",Object(O.jsx)(G.a,{className:"bi-link"})]})]}),Object(O.jsx)("p",{className:"job-story-desc",children:r}),Object(O.jsx)("h1",{className:"skill-heading",children:"Skills"}),Object(O.jsx)("ul",{className:"skill-container",children:m.map((function(e){return Object(O.jsx)(z,{skillDetails:e},e.name)}))}),Object(O.jsx)("h1",{className:"life-company-heading",children:"Life at company"}),Object(O.jsxs)("div",{className:"life-at-company-container",children:[Object(O.jsx)("p",{className:"life-company-desc",children:h}),Object(O.jsx)("img",{src:p,alt:"life at company",className:"company-logo"})]})]}),Object(O.jsx)("h1",{className:"similar-job-heading",children:"Similar Jobs"}),Object(O.jsx)("ul",{className:"similar-job-container",children:n.map((function(e){return Object(O.jsx)(K,{jobDetails:e},e.id)}))})]})},e.renderFailureView=function(){return Object(O.jsxs)("div",{className:"render-loading-view",children:[Object(O.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/failure-img.png",alt:"failure view",className:"failure-view"}),Object(O.jsx)("h1",{className:"failure-heading",children:"Oops! Something Went Wrong "}),Object(O.jsx)("p",{className:"failure-desc",children:"We cannot seem to find the page you are looking for"}),Object(O.jsx)("button",{type:"button","data-testid":"button",className:"job-item-failure-button",onClick:e.getJobDetails,children:"Retry"})]})},e.renderLoadingView=function(){return Object(O.jsx)("div",{className:"loader-container","data-testid":"loader",children:Object(O.jsx)(S.a,{type:"ThreeDots",color:"#ffffff",height:"50",width:"50"})})},e.renderJobViews=function(){switch(e.state.apiStatus){case Y:return e.renderJobItemDetails();case q:return e.renderLoadingView();case Q:return e.renderFailureView();default:return null}},e}return Object(h.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){this.getJobDetails()}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"black",children:[Object(O.jsx)(g,{}),Object(O.jsx)("div",{className:"get-products-details-container",children:this.renderJobViews()})]})}}])}(n.Component),Z=X,$=a(35),ee=function(e){return void 0===u.a.get("jwt_token")?Object(O.jsx)(o.a,{to:"/login"}):Object(O.jsx)(o.b,Object($.a)({},e))},te=(a(73),function(){return Object(O.jsxs)("div",{className:"not-found-container",children:[Object(O.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png",alt:"not found",className:"not-found-image"}),Object(O.jsx)("h1",{className:"not-found-heading",children:"Page Not Found"}),Object(O.jsx)("p",{className:"not-desc",children:"We are sorry, the page you requested could not be found"})]})}),ae=(a(74),function(){return Object(O.jsxs)(o.d,{children:[Object(O.jsx)(o.b,{exact:!0,path:"/login",component:x}),Object(O.jsx)(ee,{exact:!0,path:"/",component:y}),Object(O.jsx)(ee,{exact:!0,path:"/jobs",component:M}),Object(O.jsx)(ee,{exact:!0,path:"/jobs/:id",component:Z}),Object(O.jsx)(o.b,{path:"/not-found",component:te}),Object(O.jsx)(o.a,{to:"not-found"})]})});i.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(r.a,{children:Object(O.jsx)(ae,{})})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.926e64e5.chunk.js.map