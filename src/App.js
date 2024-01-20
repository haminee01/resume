import logo from "./logo.svg";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <div className="mg">
      <div className="navbar">
        <div>
          <div style={{ fontSize: "40px", marginBottom: "10px" }}>이하민</div>
          <div>꾸준히 성장하는 디자이너&개발자</div>
        </div>

        <div className="navbar-contact">
          <div className="navbar-right">
            <div className="navbar-a">
              <a className="icon-click" href="https://github.com/haminee01">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  style={{ width: "50px" }}
                  class="image"
                />
              </a>
            </div>
            <div className="navbar-a">
              <a href="https://tall-owl-b69.notion.site/517f5cd2db684a07afa73275e089e277">
                <img
                  src="https://cdn.icon-icons.com/icons2/2428/PNG/512/notion_black_logo_icon_147102.png"
                  style={{ width: "50px", marginRight: "10px" }}
                  class="image"
                />
              </a>
            </div>
          </div>
          <div>Email: gkmin123@khu.ac.kr</div>
          <div>Contact: 010-7368-1942</div>
          <div>Birth Date: 2001.09.22</div>
        </div>
      </div>

      <div>
        <div className="font">About Me</div>
        <Container>
          <Row className="about-me">
            <Col xs={12} md={3}>
              <img
                src="https://file.notion.so/f/f/02447387-15b2-4ab2-9ce1-211b86ea7555/b286a320-00d1-4d67-a5c6-b70f926cae5b/Untitled.jpeg?id=ea9b74fe-7dec-4a9c-bb38-ec301dd4ae60&table=block&spaceId=02447387-15b2-4ab2-9ce1-211b86ea7555&expirationTimestamp=1705737600000&signature=q2lw2Kjqtsw0F1peGv5eIGxkjRRgN6OjseI0QiyD2v8&downloadName=Untitled.jpeg"
                style={{ width: "170px" }}
              />
            </Col>
            <Col xs={12} md={9} className="aboutme-text">
              <div className="aboutme-text-mb">
                안녕하세요. 저는 경희대 산업디자인학과 3학년을 마치고 휴학중인
                이하민입니다. 디자인과 개발의 조화를 추구하는 풀스택 개발자가
                되고자 합니다.
              </div>
              <div className="aboutme-text-mb">
                현재 프론트엔드 HTML, CSS, JavaScript, React 기반의 다양한 개발
                프로젝트들을 해왔고, Java 언어를 통해 백엔드 개발자로 성장 중에
                있습니다. 또한 개발 시 필요한 UX/UI 디자인 작업 및 디자이너와의
                소통이 원활합니다.
              </div>
              <div className="aboutme-text-mb">
                또한 개발 공부를 하며 UX/UI 디자인을 구현하기 위해서는 개발
                능력이 필수라고 느꼈습니다. 그래서 저는 프론트엔드와
                백엔드에서의 논리적인 구성과 동적인 기능 구현에 도전했습니다.
                프론트엔드에서는 사용자의 요구사항과 편의성을 고려하여 UI/UX를
                디자인하고, JavaScript와 React를 사용하여 동적인 기능을
                구현하였습니다. 백엔드에서는 Java를 이용하여 기초적인 로직을
                설계하고 구현했습니다. 이러한 과정을 통해 저는 풀스택
                개발자로서의 역량을 키우고 성장 중에 있습니다.
              </div>
            </Col>
          </Row>
        </Container>

        <div>
          <div style={{ marginTop: "80px" }} className="font">
            Skill
          </div>
          <Container>
            {/* Frontend Section */}
            <Row className="about-me">
              <Col xs={12} sm={4} md={3} className="details">
                <h4>Frontend</h4>
              </Col>
              <Col xs={12} sm={4} md={3}>
                <ul>
                  <li>HTML/CSS</li>
                  <li>JavaScript</li>
                  <li>React.js</li>
                  <li>CSS 프레임워크 (Bootstrap)</li>
                  <li>RESTful API</li>
                  <li>버전 관리 시스템 (Git)</li>
                  <li>웹/앱 디자인</li>
                </ul>
              </Col>
            </Row>

            {/* Backend Section */}
            <Row className="about-me">
              <Col xs={12} sm={4} md={3} className="details">
                <h4>Backend</h4>
              </Col>
              <Col xs={12} sm={4} md={3}>
                <ul>
                  <li>JAVA 기초</li>
                </ul>
              </Col>
            </Row>

            {/* Design Section */}
            <Row className="about-me">
              <Col xs={12} sm={4} md={3} className="details">
                <h4>Design</h4>
              </Col>
              <Col xs={12} sm={4} md={3}>
                <ul>
                  <li>Figma</li>
                  <li>XD</li>
                  <li>Photoshop</li>
                  <li>Illustrator</li>
                  <li>Rhino</li>
                  <li>KeyShot</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>

        <div>
          <div style={{ marginTop: "80px" }} className="font">
            Experience
          </div>
          <Container>
            <Row className="about-me">
              <Col xs={12} md={3}>
                <h4>React Hooks</h4>
              </Col>
              <Col xs={12} md={9}>
                <ul>
                  <li className="aboutme-text-mb">
                    <strong>useState 활용</strong>: 함수형 컴포넌트에서 상태를
                    관리하기 위해 useState 훅을 활용하여 컴포넌트의 동적인
                    상태를 효과적으로 다룰 수 있습니다.
                  </li>
                  <li>
                    <strong>useEffect 활용</strong>: 비동기 작업, 데이터 로딩을
                    다루기 위해 useEffect 훅을 사용하여 효율적인 사이드 이펙트
                    관리가 가능합니다.
                  </li>
                </ul>
              </Col>
            </Row>

            <Row className="about-me">
              <Col xs={12} md={3}>
                <h4>React Redux</h4>
                <div className="navbar-a hnm-router">
                  <a
                    href="https://master--resplendent-dasik-66089b.netlify.app/"
                    class="image netflix-clone"
                  >
                    Phone Book
                  </a>
                </div>
              </Col>
              <Col xs={12} md={9}>
                <ul>
                  <li className="aboutme-text-mb">
                    <strong>액션 및 리듀서 작성</strong>: 예측 가능한 상태
                    변화를 위해 액션과 리듀서를 작성하여, 각 액션에 따른 상태
                    변경을 정의하고 구조화된 상태 관리를 구현할 수 있습니다.
                  </li>
                  <li className="aboutme-text-mb">
                    <strong>미들웨어 통합</strong>: Redux 미들웨어를 활용하여
                    비동기 작업 처리와 같은 부가적인 기능을 추가하여
                    애플리케이션의 효율성 향상시킬 수 있습니다.
                  </li>
                  <li>
                    <strong>디버깅 및 툴 활용</strong>: Redux DevTools를
                    사용하여 개발 중인 애플리케이션의 상태 및 액션 히스토리에
                    대한 디버깅이 가능합니다.
                  </li>
                </ul>
              </Col>
            </Row>

            <Row className="about-me">
              <Col xs={12} md={3}>
                <h4>React Router</h4>
                <div className="navbar-a hnm-router">
                  <a
                    href="https://65700ff8629f6c3377e1e2f0--keen-squirrel-78e14c.netlify.app/"
                    class="image netflix-clone"
                  >
                    H&M Clone
                  </a>
                </div>
              </Col>
              <Col xs={12} md={9}>
                <ul>
                  <li className="aboutme-text-mb">
                    <strong>동적 라우팅 및 네비게이션</strong>: 리액트 라우터를
                    활용하여 동적인 라우팅 및 페이지 간 네비게이션을 효과적으로
                    구현할 수 있습니다.
                  </li>
                  <li>
                    <strong>라우터 파라미터 및 쿼리 스트링 활용</strong>: 동적
                    라우트 파라미터 및 쿼리 스트링을 이용하여 다양한 페이지에
                    대한 유연한 데이터 전달과 처리가 가능합니다.
                  </li>
                </ul>
              </Col>
            </Row>

            <Row className="about-me">
              <Col xs={12} md={3}>
                <h4>Component</h4>
              </Col>
              <Col xs={12} md={9}>
                <ul>
                  <li>
                    <strong>컴포넌트 기반 아키텍처</strong>: 리액트의 주요 개념
                    중 하나인 컴포넌트 기반 아키텍처를 이해하고, 재사용 가능하고
                    독립적인 컴포넌트를 작성하여 애플리케이션의 구조화된 설계가
                    가능합니다.
                  </li>
                </ul>
              </Col>
            </Row>

            <Row className="about-me">
              <Col xs={12} md={3}>
                <h4>RESTful API</h4>
                <div className="navbar-a hnm-router">
                  <a
                    href="https://master--sunny-granita-2c85cd.netlify.app/"
                    class="image netflix-clone"
                  >
                    Weather App
                  </a>
                </div>
              </Col>
              <Col xs={12} md={9}>
                <ul>
                  <li>
                    <strong>RESTful API 호출 및 데이터 획득</strong>: Axios 또는
                    Fetch API를 활용하여 서버로부터 데이터를 비동기적으로
                    요청하고 응답을 받을 수 있습니다.
                  </li>
                  <li>
                    <strong>상태 관리 및 상태 업데이트</strong>: useState 훅을
                    이용하여 API에서 받은 데이터를 컴포넌트의 상태로 관리하고,
                    필요한 경우 useEffect 훅을 통해 데이터 업데이트 및
                    재랜더링을 효과적으로 할 수 있습니다.
                  </li>
                  <li>
                    <strong>비동기 작업 및 에러 핸들링</strong>: async/await
                    문법을 활용하여 비동기 작업을 처리하고, API 호출 중 발생한
                    에러에 대한 핸들링이 가능합니다.
                  </li>
                </ul>
              </Col>
            </Row>

            <Row className="about-me">
              <Col>
                <div className="navbar-a hnm-router">
                  <a
                    href="https://github.com/haminee01/netflix-clone"
                    class="image netflix-clone"
                  >
                    Netflix Clone
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div>
          <div style={{ marginTop: "80px" }} className="font">
            Education
          </div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">기간</th>
                <th scope="col">학교명</th>
                <th scope="col">학과</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>17.03 ~ 20.02</td>
                <td>동명여자고등학교</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>20.03 ~ </td>
                <td>경희대학교</td>
                <td>산업디자인학과</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <div style={{ marginTop: "80px" }} className="font">
            지원동기
          </div>
          <div style={{ marginTop: "40px" }}>
            <div>
              <div className="aboutme-text-mb">
                저는 AI와 감정적인 대화를 통해 1인 가구 사용자의 일기를 작성하고
                삶의 풍요로움과 친밀감을 증진시켜주는 반려일기AI 서비스를 대학
                프로젝트로 기획하고 디자인했습니다. 이 프로젝트는 '로봇과의 감정
                교류'라는 주제로 진행되었습니다. 이 경험을 통해 AI를 직접
                기획하고 디자인하는 능력을 키웠고, 이를 실현해보고 싶어 AI
                업계에 진출하고 싶은 열정과 능력을 키웠습니다.
              </div>{" "}
              <div className="aboutme-text-mb">
                랭코드 회사의 CXP 솔루션은 AI가 기업의 문서와 데이터를 분석하고
                질의응답을 생성하는 서비스입니다. 저는 이 서비스가 1인 가구
                사용자의 일기와 대화를 AI가 분석하고 응답하는 것과 비슷한 부분이
                있다고 생각합니다. 이러한 유사성 때문에 저는 랭코드 회사에
                인턴으로 지원하게 되었습니다.
              </div>{" "}
              <div className="aboutme-text-mb">
                저는 개발에 대한 열정과 AI를 통한 혁신에 대한 꿈을 가지고
                있습니다. 랭코드의 인턴으로서, CXP 솔루션의 개선과 확장에
                기여하고 싶습니다. 또한, 제가 가진 디자인과 개발 역량을
                발휘하여, 랭코드와 함께 성장하고 싶습니다.
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
