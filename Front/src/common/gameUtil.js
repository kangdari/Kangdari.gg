// 검색한 유저의 정보
export const getCurrentUser = (participants, puuid) => {
  const user = participants.find((user) => user.puuid === puuid);
  return user;
};

// 게임 시간(생존 시간) 구하기
export const getGameTime = (time) => {
  const minute = Math.floor(time / 60);
  const second = Math.floor(time % 60);
  return {
    minute,
    second,
  };
};

// 게임 날짜 구하기, 현재 시간과 비교
export const getDate = (datetime) => {
    const today = new Date(); // 현재 시간
    const date = new Date(datetime) // 게임 날짜
    // 시간 차이
    const diffTime = ((today.getTime() - date.getTime()) / (1000*60*60));
    const time = diffTime >=1 ? diffTime.toFixed(0) : (diffTime);

    // 날짜 차이
    const diffDate = (today.getTime() - date.getTime()) / (1000*60*60*24)
    const day = diffDate.toFixed(0)

    if(time > 24){
        return `${day}일 전`
    }else if(time < 1){
        return `${(time*60).toFixed(0)}분 전`;
    }else{
        return `${time}시간 전`;
    }
    
}
