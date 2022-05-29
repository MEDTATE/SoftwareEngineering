import Button from "./Button";
import logo from "./소공로고.jpg";
import style from "./style/Header.css"

const Header = ({mode}) => {
    return(
        <div>          
            {mode ? //mode가 true이면(로그인 상태이면) 검색창과 회원정보 출력, false이면(로그아웃 상태이면) 로그인 회원가입 버튼 출력
                <div className="header">
                    <img className="headerLogo" src={logo} alt="로고" />
                    <form className="header__Search">
                        <input className="header__searchInput" placeholder="검색어를 입력하세요" required />
                        <Button type="submit">제출</Button> 
                    </form>
                    <div>
                        <span>반갑습니다!</span>
                        <Button>로그아웃</Button>
                    </div>
                    <div>
                        <Button>옷 추가하기</Button>
                        <Button>회원정보 수정</Button>
                    </div>
                </div> 
             : //여기부터 로그아웃 상태
                <div className="header">
                    <img className="headerLogo" src={logo} alt="로고" />
                    <div>
                        <Button>로그인</Button>
                        <Button>회원가입</Button>
                    </div>
                </div>
            }
        <hr />
        </div>
    );
};

export default Header;