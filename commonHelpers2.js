import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".feedback-form"),t=JSON.parse(localStorage.getItem("feedback-form-state"));t&&(t.email!==void 0&&(e.email.value=t.email),t.message!==void 0&&(e.message.value=t.message)),e.addEventListener("input",function(n){const{name:a,value:s}=n.target,o=s.trim(),m=JSON.stringify({...t??{},[a]:o});localStorage.setItem("feedback-form-state",m)}),e.addEventListener("submit",function(n){n.preventDefault();const a=e.email.value.trim(),s=e.message.value.trim();a&&s?(console.log({email:a,message:s}),localStorage.removeItem("feedback-form-state"),e.reset()):alert("Please fill in both email and message fields.")})});
//# sourceMappingURL=commonHelpers2.js.map
