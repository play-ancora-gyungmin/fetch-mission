const userListContainer = document.getElementById('user-list');

const getUserList = async function() {
  try{
    const userGet = await fetch('https://randomuser.me/api/?results=20');
    const userRaw = await userGet.json();
    const userList = userRaw.results; //하찮은 오타라니! 
    userList.forEach(user => {
      userItemMaker(user);
    });
  }catch(err){
    console.log(err);
  }
}

const userItemMaker = function(user) {
  const userName = user.name.first + " " + user.name.last;
  const userEmail = user.email;
  const userPhone = user.phone;
  const userImg = user.picture.large;
  
  const userItemElement = `
    <div class="user-item">
      <div class="user-img-wrap">
        <img src="${userImg}" alt="${userName} 프로필 이미지" class="user-img"/>
      </div>
      <div class="user-info-wrap">
        <h3 class="user-name">${userName}</h3>
        <p class="user-email">${userEmail}</p>
        <p class="user-phone">${userPhone}</p>
      </div>
    </div>
  `;

  userListContainer.insertAdjacentHTML('beforeend', userItemElement);

}

getUserList();