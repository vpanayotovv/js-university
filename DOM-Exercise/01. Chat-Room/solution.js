function solve() {

   const sendBtn = document.getElementById('send')
   const textarea = document.getElementById('chat_input')

   sendBtn.addEventListener('click', sendMassage)

   function sendMassage(){
   
      let massage = textarea.value;
      let newMassage = document.createElement('div');
      newMassage.classList.add('message','my-message');
      newMassage.textContent = massage;

      document.getElementById('chat_messages').appendChild(newMassage);
      console.log(textarea)

      textarea.value = '';
   }
}