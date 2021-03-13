import React from 'react';
import { Avatar } from "antd";
import { Button } from "antd";
import { Col } from "antd";
import { Divider } from "antd";
import { Image } from "antd";
import { Layout } from "antd";
import { Menu } from "antd";
import { Row } from "antd";
import { Typography } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { CaretDownOutlined } from "@ant-design/icons";
import { CaretRightOutlined } from "@ant-design/icons";
import { MenuOutlined } from "@ant-design/icons";

function PortfolioAntUI(props) {
  return (
    <div>
      <Layout
        style={{
          backgroundColor: "#1f2235",
          paddingTop: "10px",
          paddingBottom: "5px",
          paddingLeft: "100px",
          paddingRight: "100px",
        }}
      >
        <Row style={{ backgroundColor: "#1f2235" }}>
          <Col
            sm={22}
            xs={23}
            md={4}
            span={1}
            style={{ backgroundColor: "#1f2235" }}
          >
            <Row style={{ paddingTop: "6px" }}>
              <Col>
                <Avatar
                  src="https://static1.squarespace.com/static/5df9ba9cfb325158acadf8b0/t/5f0301bb6e62565b9d585f91/1603697990249/?format=1500w"
                  style={{ width: "50px", marginTop: "-11px", height: "50px" }}
                />
              </Col>
              <Col>
                <Typography.Text
                  style={{
                    fontSize: "15px",
                    fontFamily: "sans-serif",
                    color: "rgba(255,255,255,0.89)",
                    fontWeight: "600",
                    paddingLeft: "3px",
                  }}
                >
                  SlashDiv
                </Typography.Text>
              </Col>
            </Row>
          </Col>
          <Col sm={2} xs={1} md={20} span={1} style={{ paddingBottom: "5px" }}>
            <Menu
              mode="horizontal"
              overflowedIndicator={
                <MenuOutlined
                  style={{ color: "rgba(255,255,255,0.89)", fontSize: "20px" }}
                />
              }
              style={{
                border: "none",
                justifyContent: "space-between",
                background: "none",
                display: "flex",
              }}
            >
              <Menu.Item
                key="1"
                style={{ border: "none", backgroundColor: "#1f2235" }}
              >
                <div style={{ textAlign: "center" }}>
                  <Button
                    style={{
                      border: "none",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                      color: "rgba(255,255,255,0.89)",
                      background: "none",
                      fontWeight: "600",
                    }}
                  >
                    ABOUT
                  </Button>
                </div>
              </Menu.Item>
              <Menu.Item
                key="1"
                style={{ backgroundColor: "#1f2235", border: "none" }}
              >
                <div style={{ textAlign: "center" }}>
                  <Button
                    style={{
                      border: "none",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                      color: "#fec576",
                      background: "none",
                      fontWeight: "600",
                    }}
                  >
                    WORKS
                  </Button>
                </div>
                <div style={{ marginTop: "-20px", textAlign: "center" }}>
                  <CaretDownOutlined style={{ color: "#fec576" }} />
                </div>
              </Menu.Item>
              <Menu.Item
                key="1"
                style={{ backgroundColor: "#1f2235", border: "none" }}
              >
                <div style={{ textAlign: "center" }}>
                  <Button
                    style={{
                      border: "none",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                      color: "rgba(255,255,255,0.89)",
                      background: "none",
                      fontWeight: "600",
                    }}
                  >
                    CASE STUDY
                  </Button>
                </div>
              </Menu.Item>
              <Menu.Item
                key="2"
                style={{ backgroundColor: "#1f2235", border: "none" }}
              >
                <div style={{ textAlign: "center" }}>
                  <Button
                    style={{
                      border: "none",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                      color: "rgba(255,255,255,0.89)",
                      background: "none",
                      fontWeight: "600",
                    }}
                  >
                    CLIENTS
                  </Button>
                </div>
              </Menu.Item>
              <Menu.Item style={{ backgroundColor: "#1f2235", border: "none" }}>
                <div style={{ textAlign: "center" }}>
                  <Button
                    style={{
                      border: "none",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                      color: "rgba(255,255,255,0.89)",
                      background: "none",
                      fontWeight: "600",
                    }}
                  >
                    CONTACT
                  </Button>
                </div>
              </Menu.Item>
              <Menu.Item style={{ backgroundColor: "#1f2235", border: "none" }}>
                <div style={{ textAlign: "center" }}>
                  <Button
                    style={{
                      border: "none",
                      borderRadius: "0px",
                      color: "#fec576",
                      background: "none",
                      fontWeight: "600",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                      borderColor: "#fec576",
                      borderWidth: "1px",
                      borderStyle: "solid",
                    }}
                  >
                    LET&#039;S CHAT
                  </Button>
                </div>
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </Layout>
      <Layout
        style={{
          backgroundColor: "#1f2235",
          paddingLeft: "100px",
          paddingRight: "100px",
        }}
      >
        <Row justify="space-between">
          <Col xs={14}>
            <div style={{ paddingTop: "30px" }}>
              <Typography.Title
                style={{
                  fontSize: "20px",
                  fontFamily: "Noto Sans JP",
                  color: "#fec576",
                  letterSpacing: "1px",
                }}
              >
                Hello, I&#039;m
              </Typography.Title>
              <Typography.Title
                style={{
                  color: "rgba(255,255,255,0.86)",
                  fontWeight: "500",
                  letterSpacing: "3px",
                  paddingLeft: "10px",
                  fontSize: "40px",
                  fontFamily: "Abril Fatface",
                  marginTop: "-0px",
                }}
              >
                Vardhan
              </Typography.Title>
              <Typography.Title
                style={{
                  color: "rgba(255,255,255,0.86)",
                  fontWeight: "500",
                  letterSpacing: "3px",
                  paddingLeft: "10px",
                  fontSize: "40px",
                  fontFamily: "Abril Fatface",
                  marginTop: "-30px",
                }}
              >
                Techies
              </Typography.Title>
              <Typography.Title
                style={{
                  fontSize: "22px",
                  fontFamily: "Noto Sans JP",
                  marginTop: "-0px",
                  color: "rgba(255,255,255,0.86)",
                  fontWeight: "100",
                  paddingLeft: "10px",
                }}
              >
                Product Designer
              </Typography.Title>
            </div>
          </Col>
          <Col xs={10}>
            <div style={{ textAlign: "right" }}>
              <Image src="https://i.imgur.com/yCaRuDb.png" />
            </div>
          </Col>
        </Row>
      </Layout>
      <Layout
        style={{
          backgroundColor: "#292f44",
          paddingLeft: "100px",
          paddingRight: "100px",
        }}
      >
        <Layout style={{ backgroundColor: "#1f2235" }}>
          <Row style={{ backgroundColor: "#1f2235" }}>
            <Col
              sm={21}
              xs={21}
              md={5}
              span={1}
              style={{ backgroundColor: "#fec576" }}
            >
              <div style={{ paddingTop: "7px", textAlign: "center" }}>
                <Button
                  style={{
                    border: "none",
                    fontSize: "12px",
                    fontFamily: "sans-serif",
                    color: "#000000",
                    background: "none",
                    fontWeight: "600",
                  }}
                >
                  ABOUT
                </Button>
              </div>
            </Col>
            <Col
              sm={3}
              xs={3}
              md={19}
              span={1}
              style={{ backgroundColor: "#282e4d", paddingBottom: "5px" }}
            >
              <Menu
                mode="horizontal"
                overflowedIndicator={
                  <MenuOutlined
                    style={{
                      color: "rgba(255,255,255,0.89)",
                      fontSize: "20px",
                    }}
                  />
                }
                style={{
                  border: "none",
                  justifyContent: "space-between",
                  background: "none",
                  display: "flex",
                }}
              >
                <Menu.Item
                  key="1"
                  style={{ border: "none", backgroundColor: "#282e4d" }}
                >
                  <div style={{ textAlign: "center" }}>
                    <Button
                      style={{
                        border: "none",
                        fontSize: "12px",
                        fontFamily: "sans-serif",
                        color: "#ffffff",
                        background: "none",
                      }}
                    >
                      MY SERVICES
                    </Button>
                  </div>
                </Menu.Item>
                <Divider
                  type="vertical"
                  style={{
                    backgroundColor: "#4a4a4a",
                    marginTop: "1px",
                    height: "auto",
                  }}
                />
                <Menu.Item
                  key="1"
                  style={{ backgroundColor: "#282e4d", border: "none" }}
                >
                  <div style={{ textAlign: "center" }}>
                    <Button
                      style={{
                        border: "none",
                        fontSize: "12px",
                        fontFamily: "sans-serif",
                        color: "#ffffff",
                        background: "none",
                      }}
                    >
                      INTERVIEWS
                    </Button>
                  </div>
                </Menu.Item>
                <Divider
                  type="vertical"
                  style={{
                    backgroundColor: "#4a4a4a",
                    marginTop: "1px",
                    height: "auto",
                  }}
                />
                <Menu.Item
                  key="1"
                  style={{ backgroundColor: "#282e4d", border: "none" }}
                >
                  <div style={{ textAlign: "center" }}>
                    <Button
                      style={{
                        border: "none",
                        fontSize: "12px",
                        fontFamily: "sans-serif",
                        color: "#ffffff",
                        background: "none",
                      }}
                    >
                      AWARDS
                    </Button>
                  </div>
                </Menu.Item>
                <Divider
                  type="vertical"
                  style={{
                    backgroundColor: "#4a4a4a",
                    marginTop: "1px",
                    height: "auto",
                  }}
                />
                <Menu.Item
                  key="2"
                  style={{ backgroundColor: "#282e4d", border: "none" }}
                >
                  <div style={{ textAlign: "center" }}>
                    <Button
                      style={{
                        border: "none",
                        fontSize: "12px",
                        fontFamily: "sans-serif",
                        color: "#ffffff",
                        background: "none",
                      }}
                    >
                      EXHIBITIONS
                    </Button>
                  </div>
                </Menu.Item>
              </Menu>
            </Col>
          </Row>
        </Layout>
        <Layout
          style={{
            backgroundColor: "#313552",
            paddingTop: "70px",
            paddingBottom: "50px",
          }}
        >
          <Row justify="space-between">
            <Col xs={24} md={9} lg={8}>
              <div
                style={{
                  paddingTop: "20px",
                  paddingBottom: "50px",
                  textAlign: "center",
                }}
              >
                <img
                  src="https://i.imgur.com/3wPbt6U.png"
                  style={{
                    borderRadius: "100%",
                    borderWidth: "5px",
                    borderColor: "#fec576",
                    borderStyle: "solid",
                  }}
                ></img>
              </div>
            </Col>
            <Col xs={24} md={15} lg={16}>
              <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
                <div>
                  <Typography.Title
                    style={{
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                      color: "#fec576",
                      letterSpacing: "1px",
                    }}
                  >
                    ABOUT ME
                  </Typography.Title>
                  <Typography.Title
                    style={{
                      paddingTop: "15px",
                      color: "rgba(255,255,255,0.86)",
                      fontWeight: "600",
                      letterSpacing: "3px",
                      fontSize: "30px",
                      fontFamily: "Source Serif Pro",
                      marginTop: "-0px",
                    }}
                  >
                    Why hire me for your next project?
                  </Typography.Title>
                </div>
                <div
                  style={{
                    fontSize: "15px",
                    paddingTop: "5px",
                    fontFamily: "sans-serif",
                    color: "rgba(255,255,255,0.8)",
                  }}
                >
                  <span>Meet my startup design agency </span>
                  <span style={{ color: "#fec576" }}>Slash Techies </span>
                  <span>Currently I am working at </span>
                  <span style={{ color: "#fec576" }}>SlashDiv </span>
                  <span>as Product Designer. </span>
                  <span>Before that I&#039;ve worked at </span>
                  <span style={{ color: "#fec576" }}>SlashSee, </span>
                  <span>Dhaka as aUX, UI Designer.</span>
                </div>
                <div style={{ paddingTop: "15px" }}>
                  <Typography.Text
                    style={{
                      color: "rgba(255,255,255,0.8)",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    I love to work in User Experience &amp; User Interface
                    designing. Because I love to solve the design problem and
                    find easy and better solutions to solve it. I always try my
                    best to make good user interface with the best user
                    experience. I have been working as a{" "}
                  </Typography.Text>
                </div>
                <div style={{ paddingTop: "40px" }}>
                  <Button
                    style={{
                      borderRadius: "0px",
                      color: "#fec576",
                      background: "NONE",
                      fontSize: "15px",
                      paddingBottom: "30px",
                      borderColor: "#fec576",
                      fontFamily: "sans-serif",
                    }}
                  >
                    LEARN MORE
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Layout>
      </Layout>
      <Layout
        style={{
          backgroundColor: "#292f44",
          paddingTop: "50px",
          paddingBottom: "50px",
          borderColor: "#fec576",
          paddingLeft: "100px",
          paddingRight: "100px",
        }}
      >
        <div>
          <Row>
            <Col>
              <div>
                <Typography.Text
                  style={{
                    color: "#fec576",
                    fontSize: "12px",
                    fontFamily: "sans-serif",
                  }}
                >
                  MY CLIENTS
                </Typography.Text>
              </div>
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col>
              <div style={{ paddingTop: "5px" }}>
                <Typography.Text
                  style={{
                    fontSize: "30px",
                    fontFamily: "Abril Fatface",
                    color: "rgba(255,255,255,0.89)",
                    fontWeight: "400",
                    letterSpacing: "1px",
                  }}
                >
                  Projects
                </Typography.Text>
              </div>
            </Col>
          </Row>
        </div>
        <div style={{ paddingTop: "30px" }}>
          <Row gutter={30}>
            <Col xs={24} md={12} lg={8} style={{ paddingBottom: "30px" }}>
              <Layout
                style={{ backgroundColor: "#fec576", paddingBottom: "1px" }}
              >
                <div style={{ backgroundColor: "#282e4d" }}>
                  <img
                    src="https://i.imgur.com/1PS6Npr.png"
                    style={{ width: "100%", borderRadius: "5px" }}
                  ></img>
                  <div style={{ padding: "10px" }}>
                    <Typography.Title
                      style={{
                        fontSize: "12px",
                        paddingTop: "25px",
                        fontFamily: "sans-serif",
                        color: "#fec576",
                      }}
                    >
                      DASHBOARD, SLASHKART
                    </Typography.Title>
                    <Typography.Title
                      style={{
                        fontSize: "21px",
                        fontFamily: "Source Serif Pro",
                        marginTop: "20px",
                        color: "#ffffff",
                        fontWeight: "500",
                      }}
                    >
                      Online Shopping Slashkart Portal
                    </Typography.Title>
                    <Typography.Title
                      style={{
                        fontSize: "13px",
                        fontFamily: "sans-serif",
                        color: "#ffffff",
                        fontWeight: "500",
                      }}
                    >
                      I made this Slashkart to human Purchase needs{" "}
                    </Typography.Title>
                  </div>
                  <div
                    style={{
                      paddingTop: "30px",
                      paddingBottom: "40px",
                      paddingLeft: "10px",
                    }}
                  >
                    <Button
                      style={{
                        borderRadius: "0px",
                        fontSize: "12px",
                        borderColor: "#fec576",
                        fontFamily: "sans-serif",
                        color: "#fec576",
                        background: "none",
                      }}
                    >
                      READ PROCESS
                    </Button>
                  </div>
                </div>
              </Layout>
            </Col>
            <Col xs={24} md={12} lg={8} style={{ paddingBottom: "30px" }}>
              <Layout
                style={{ backgroundColor: "#fec576", paddingBottom: "1px" }}
              >
                <div style={{ backgroundColor: "#282e4d" }}>
                  <img
                    src="https://i.imgur.com/nPMk35z.png"
                    style={{ width: "100%", borderRadius: "5px" }}
                  ></img>
                  <div style={{ padding: "10px" }}>
                    <Typography.Title
                      style={{
                        fontSize: "12px",
                        paddingTop: "25px",
                        fontFamily: "sans-serif",
                        color: "#fec576",
                      }}
                    >
                      DASHBOARD, BOOKSLASHSHOW
                    </Typography.Title>
                    <Typography.Title
                      style={{
                        fontSize: "21px",
                        fontFamily: "Source Serif Pro",
                        marginTop: "20px",
                        color: "#ffffff",
                        fontWeight: "500",
                      }}
                    >
                      Movie Tickets Onlie Booking
                    </Typography.Title>
                    <Typography.Title
                      style={{
                        fontSize: "13px",
                        fontFamily: "sans-serif",
                        color: "#ffffff",
                        fontWeight: "500",
                      }}
                    >
                      I made this BookSlashShow to human Enjoyment{" "}
                    </Typography.Title>
                  </div>
                  <div
                    style={{
                      paddingTop: "30px",
                      paddingBottom: "40px",
                      paddingLeft: "10px",
                    }}
                  >
                    <Button
                      style={{
                        borderRadius: "0px",
                        fontSize: "12px",
                        borderColor: "#fec576",
                        fontFamily: "sans-serif",
                        color: "#fec576",
                        background: "none",
                      }}
                    >
                      READ PROCESS
                      <ArrowRightOutlined />
                    </Button>
                  </div>
                </div>
              </Layout>
            </Col>
            <Col xs={24} md={12} lg={8} style={{ paddingBottom: "30px" }}>
              <Layout
                style={{ backgroundColor: "#fec576", paddingBottom: "1px" }}
              >
                <div style={{ backgroundColor: "#282e4d" }}>
                  <img
                    src="https://i.imgur.com/YWtiEvH.png"
                    style={{ width: "100%", borderRadius: "5px" }}
                  ></img>
                  <div style={{ padding: "10px" }}>
                    <Typography.Title
                      style={{
                        fontSize: "12px",
                        paddingTop: "25px",
                        fontFamily: "sans-serif",
                        color: "#fec576",
                      }}
                    >
                      DASHBOARD, SLASH FLIGHT-PORTAL
                    </Typography.Title>
                    <Typography.Title
                      style={{
                        fontSize: "21px",
                        fontFamily: "Source Serif Pro",
                        marginTop: "20px",
                        color: "#ffffff",
                        fontWeight: "500",
                      }}
                    >
                      Flight Tickets Online Booking
                    </Typography.Title>
                    <Typography.Title
                      style={{
                        fontSize: "13px",
                        fontFamily: "sans-serif",
                        color: "#ffffff",
                        fontWeight: "500",
                      }}
                    >
                      I made this Booking Portal to human Travelling needs
                    </Typography.Title>
                  </div>
                  <div
                    style={{
                      paddingTop: "30px",
                      paddingBottom: "40px",
                      paddingLeft: "10px",
                    }}
                  >
                    <Button
                      style={{
                        borderRadius: "0px",
                        fontSize: "12px",
                        borderColor: "#fec576",
                        fontFamily: "sans-serif",
                        color: "#fec576",
                        background: "none",
                      }}
                    >
                      READ PROCESS
                    </Button>
                  </div>
                </div>
              </Layout>
            </Col>
            <Col xs={24} md={12} lg={8} style={{ paddingBottom: "30px" }}>
              <Layout
                style={{ backgroundColor: "#fec576", paddingBottom: "1px" }}
              >
                <div style={{ backgroundColor: "#282e4d" }}>
                  <img
                    src="https://i.imgur.com/OfOOz6s.png"
                    style={{ width: "100%", borderRadius: "5px" }}
                  ></img>
                  <div style={{ padding: "10px" }}>
                    <Typography.Title
                      style={{
                        fontSize: "12px",
                        paddingTop: "25px",
                        fontFamily: "sans-serif",
                        color: "#fec576",
                      }}
                    >
                      DASHBOARD, PORTFOLIO
                    </Typography.Title>
                    <Typography.Title
                      style={{
                        fontSize: "21px",
                        fontFamily: "Source Serif Pro",
                        marginTop: "20px",
                        color: "#ffffff",
                        fontWeight: "500",
                      }}
                    >
                      Getting Complete Information
                    </Typography.Title>
                    <Typography.Title
                      style={{
                        fontSize: "13px",
                        fontFamily: "sans-serif",
                        color: "#ffffff",
                        fontWeight: "500",
                      }}
                    >
                      I made this Portfolio to knowing about Employee info.
                    </Typography.Title>
                  </div>
                  <div
                    style={{
                      paddingTop: "30px",
                      paddingBottom: "40px",
                      paddingLeft: "10px",
                    }}
                  >
                    <Button
                      style={{
                        borderRadius: "0px",
                        fontSize: "12px",
                        borderColor: "#fec576",
                        fontFamily: "sans-serif",
                        color: "#fec576",
                        background: "none",
                      }}
                    >
                      READ PROCESS
                    </Button>
                  </div>
                </div>
              </Layout>
            </Col>
            <Col xs={24} md={12} lg={8} style={{ paddingBottom: "30px" }}>
              <Layout
                style={{ backgroundColor: "#fec576", paddingBottom: "1px" }}
              >
                <div style={{ backgroundColor: "#282e4d" }}>
                  <img
                    src="https://i.imgur.com/ngVmK7A.png"
                    style={{ width: "100%", borderRadius: "5px" }}
                  ></img>
                  <div style={{ padding: "10px" }}>
                    <Typography.Title
                      style={{
                        fontSize: "12px",
                        paddingTop: "25px",
                        fontFamily: "sans-serif",
                        color: "#fec576",
                      }}
                    >
                      DASHBOARD, SLASH SPORTS
                    </Typography.Title>
                    <Typography.Title
                      style={{
                        fontSize: "21px",
                        fontFamily: "Source Serif Pro",
                        marginTop: "20px",
                        color: "#ffffff",
                        fontWeight: "500",
                      }}
                    >
                      Online Shopping Sports Wear
                    </Typography.Title>
                    <Typography.Title
                      style={{
                        fontSize: "13px",
                        fontFamily: "sans-serif",
                        color: "#ffffff",
                        fontWeight: "500",
                      }}
                    >
                      I made this Slash Sports to human Purchase needs{" "}
                    </Typography.Title>
                  </div>
                  <div
                    style={{
                      paddingTop: "30px",
                      paddingBottom: "40px",
                      paddingLeft: "10px",
                    }}
                  >
                    <Button
                      style={{
                        borderRadius: "0px",
                        backgroundColor: "#fec576",
                        color: "#000000",
                        fontWeight: "600",
                        fontSize: "12px",
                        borderColor: "#fec576",
                        fontFamily: "sans-serif",
                      }}
                    >
                      READ PROCESS
                      <ArrowRightOutlined />
                    </Button>
                  </div>
                </div>
              </Layout>
            </Col>
            <Col xs={24} md={12} lg={8} style={{ paddingBottom: "30px" }}>
              <Layout
                style={{ backgroundColor: "#fec576", paddingBottom: "1px" }}
              >
                <div style={{ backgroundColor: "#282e4d" }}>
                  <img
                    src="https://i.imgur.com/kgpWSzt.png"
                    style={{ width: "100%", borderRadius: "5px" }}
                  ></img>
                  <div style={{ padding: "10px" }}>
                    <Typography.Title
                      style={{
                        fontSize: "12px",
                        paddingTop: "25px",
                        fontFamily: "sans-serif",
                        color: "#fec576",
                      }}
                    >
                      DASHBOARD, SLASH FLIGHT-PORTAL(MOBILE)
                    </Typography.Title>
                    <Typography.Title
                      style={{
                        fontSize: "21px",
                        fontFamily: "Source Serif Pro",
                        marginTop: "20px",
                        color: "#ffffff",
                        fontWeight: "500",
                      }}
                    >
                      Flight Tickets Online Booking
                    </Typography.Title>
                    <Typography.Title
                      style={{
                        fontSize: "13px",
                        fontFamily: "sans-serif",
                        color: "#ffffff",
                        fontWeight: "500",
                      }}
                    >
                      I made this Booking Portal to human Travelling needs
                    </Typography.Title>
                  </div>
                  <div
                    style={{
                      paddingTop: "30px",
                      paddingBottom: "40px",
                      paddingLeft: "10px",
                    }}
                  >
                    <Button
                      style={{
                        borderRadius: "0px",
                        fontSize: "12px",
                        borderColor: "#fec576",
                        fontFamily: "sans-serif",
                        color: "#fec576",
                        background: "none",
                      }}
                    >
                      READ PROCESS
                    </Button>
                  </div>
                </div>
              </Layout>
            </Col>
          </Row>
        </div>
      </Layout>
      <Layout
        style={{
          backgroundColor: "#22273b",
          paddingTop: "50px",
          paddingBottom: "50px",
          paddingLeft: "100px",
          paddingRight: "100px",
        }}
      >
        <div>
          <Row>
            <Col>
              <div>
                <Typography.Text
                  style={{
                    color: "#fec576",
                    fontSize: "12px",
                    fontFamily: "sans-serif",
                  }}
                >
                  TESTIMONIALS
                </Typography.Text>
              </div>
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col>
              <div style={{ paddingTop: "5px" }}>
                <Typography.Text
                  style={{
                    fontSize: "30px",
                    fontFamily: "Abril Fatface",
                    color: "rgba(255,255,255,0.89)",
                    fontWeight: "400",
                    letterSpacing: "1px",
                  }}
                >
                  Happy Clients Says
                </Typography.Text>
              </div>
            </Col>
          </Row>
        </div>
        <div style={{ paddingTop: "40px" }}>
          <Row gutter={30}>
            <Col xs={24} md={12} lg={8} style={{ paddingBottom: "30px" }}>
              <Layout style={{ backgroundColor: "#fec576", padding: "1px" }}>
                <div
                  style={{
                    backgroundColor: "#313552",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  <Row
                    justify="space-between"
                    style={{ padding: "20px", fontSize: "30px" }}
                  >
                    <Col>
                      <Row justify="space-between">
                        <Col>
                          <Avatar.Group style={{ marginLeft: "10px" }}>
                            <Avatar
                              shape="circle"
                              size="large"
                              src="https://images.unsplash.com/photo-1573165850883-9b0e18c44bd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                              style={{
                                marginLeft: "-10px",
                                width: "50px",
                                borderColor: "#4852b6",
                                background: "#84ce95",
                                height: "50px",
                              }}
                            />
                          </Avatar.Group>
                        </Col>
                        <Col style={{ paddingTop: "3px", paddingLeft: "10px" }}>
                          <Typography.Title
                            style={{
                              fontSize: "22px",
                              fontFamily: "Source Serif Pro",
                              color: "rgba(255,255,255,0.94)",
                              fontWeight: "500",
                            }}
                          >
                            Madvi Matra
                          </Typography.Title>
                          <Typography.Title
                            style={{
                              fontSize: "12px",
                              fontFamily: "sans-serif",
                              marginTop: "-5px",
                              color: "rgba(254,197,118,0.92)",
                              fontWeight: "600",
                            }}
                          >
                            Product Designer at SlashDiv
                          </Typography.Title>
                        </Col>
                      </Row>
                    </Col>
                    <Col>
                      <div>
                        <i className="fas fa-quote-right"></i>
                      </div>
                    </Col>
                  </Row>
                  <Row style={{ padding: "20px", marginTop: "-30px" }}>
                    <Col>
                      <Typography.Text
                        style={{
                          color: "rgba(255,255,255,0.77)",
                          fontSize: "15px",
                          fontFamily: "Kite One",
                        }}
                      >
                        We are motivated by the satisfaction of our clients.Put
                        your trust in us and share in our growth Asset
                        Management is made up of a team of expert, committed and
                        experienced people with a passion for financial markets.
                        Our goal is to achieve continuous and sustainable growth
                        of our clients.
                      </Typography.Text>
                    </Col>
                  </Row>
                </div>
              </Layout>
            </Col>
            <Col xs={24} md={12} lg={8} style={{ paddingBottom: "30px" }}>
              <Layout style={{ backgroundColor: "#fec576", padding: "1px" }}>
                <div
                  style={{
                    backgroundColor: "#313552",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  <Row
                    justify="space-between"
                    style={{ padding: "20px", fontSize: "30px" }}
                  >
                    <Col>
                      <Row justify="space-between">
                        <Col>
                          <Avatar.Group style={{ marginLeft: "10px" }}>
                            <Avatar
                              shape="circle"
                              size="large"
                              src="https://images.unsplash.com/photo-1520365451528-b2a9445fc3bb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTQzMXx8Ymlzc2luZXNzJTIwd29tZW4lMjBwcm9maWxlJTIwcGljc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                              style={{
                                marginLeft: "-10px",
                                width: "50px",
                                borderColor: "#4852b6",
                                background: "#84ce95",
                                height: "50px",
                              }}
                            />
                          </Avatar.Group>
                        </Col>
                        <Col style={{ paddingTop: "3px", paddingLeft: "10px" }}>
                          <Typography.Title
                            style={{
                              fontSize: "22px",
                              fontFamily: "Source Serif Pro",
                              color: "rgba(255,255,255,0.94)",
                              fontWeight: "500",
                            }}
                          >
                            Mastres Jhasvi
                          </Typography.Title>
                          <Typography.Title
                            style={{
                              fontSize: "12px",
                              fontFamily: "sans-serif",
                              marginTop: "-5px",
                              color: "rgba(254,197,118,0.92)",
                              fontWeight: "600",
                            }}
                          >
                            Product Designer at SlashDiv
                          </Typography.Title>
                        </Col>
                      </Row>
                    </Col>
                    <Col>
                      <div>
                        <i className="fas fa-quote-right"></i>
                      </div>
                    </Col>
                  </Row>
                  <Row style={{ padding: "20px", marginTop: "-30px" }}>
                    <Col>
                      <Typography.Text
                        style={{
                          color: "rgba(255,255,255,0.77)",
                          fontSize: "15px",
                          fontFamily: "Kite One",
                        }}
                      >
                        We are motivated by the satisfaction of our clients.Put
                        your trust in us and share in our growth Asset
                        Management is made up of a team of expert, committed and
                        experienced people with a passion for financial markets.
                        Our goal is to achieve continuous and sustainable growth
                        of our clients.
                      </Typography.Text>
                    </Col>
                  </Row>
                </div>
              </Layout>
            </Col>
            <Col xs={24} md={12} lg={8} style={{ paddingBottom: "30px" }}>
              <Layout style={{ backgroundColor: "#fec576", padding: "1px" }}>
                <div
                  style={{
                    backgroundColor: "#313552",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  <Row
                    justify="space-between"
                    style={{ padding: "20px", fontSize: "30px" }}
                  >
                    <Col>
                      <Row justify="space-between">
                        <Col>
                          <Avatar.Group style={{ marginLeft: "10px" }}>
                            <Avatar
                              shape="circle"
                              size="large"
                              src="https://images.unsplash.com/flagged/photo-1553642618-de0381320ff3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTEyfHxiaXNzaW5lc3MlMjBtZW4lMjBwcm9maWxlJTIwcGljc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                              style={{
                                marginLeft: "-10px",
                                width: "50px",
                                borderColor: "#4852b6",
                                background: "#84ce95",
                                height: "50px",
                              }}
                            />
                          </Avatar.Group>
                        </Col>
                        <Col style={{ paddingTop: "3px", paddingLeft: "10px" }}>
                          <Typography.Title
                            style={{
                              fontSize: "22px",
                              fontFamily: "Source Serif Pro",
                              color: "rgba(255,255,255,0.94)",
                              fontWeight: "500",
                            }}
                          >
                            John Joy
                          </Typography.Title>
                          <Typography.Title
                            style={{
                              fontSize: "12px",
                              fontFamily: "sans-serif",
                              marginTop: "-5px",
                              color: "rgba(254,197,118,0.92)",
                              fontWeight: "600",
                            }}
                          >
                            Product Designer at SlashDiv
                          </Typography.Title>
                        </Col>
                      </Row>
                    </Col>
                    <Col>
                      <div>
                        <i className="fas fa-quote-right"></i>
                      </div>
                    </Col>
                  </Row>
                  <Row style={{ padding: "20px", marginTop: "-30px" }}>
                    <Col>
                      <Typography.Text
                        style={{
                          color: "rgba(255,255,255,0.77)",
                          fontSize: "15px",
                          fontFamily: "Kite One",
                        }}
                      >
                        We are motivated by the satisfaction of our clients.Put
                        your trust in us and share in our growth Asset
                        Management is made up of a team of expert, committed and
                        experienced people with a passion for financial markets.
                        Our goal is to achieve continuous and sustainable growth
                        of our clients.
                      </Typography.Text>
                    </Col>
                  </Row>
                </div>
              </Layout>
            </Col>
            <Col xs={24} md={12} lg={8} style={{ paddingBottom: "30px" }}>
              <Layout style={{ backgroundColor: "#fec576", padding: "1px" }}>
                <div
                  style={{
                    backgroundColor: "#313552",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  <Row
                    justify="space-between"
                    style={{ padding: "20px", fontSize: "30px" }}
                  >
                    <Col>
                      <Row justify="space-between">
                        <Col>
                          <Avatar.Group style={{ marginLeft: "10px" }}>
                            <Avatar
                              shape="circle"
                              size="large"
                              src="https://images.unsplash.com/photo-1573495611745-41a6963351ed?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDQxfHxiaXNzaW5lc3MlMjB3b21lbiUyMHByb2ZpbGUlMjBwaWNzfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60"
                              style={{
                                marginLeft: "-10px",
                                width: "50px",
                                borderColor: "#4852b6",
                                background: "#84ce95",
                                height: "50px",
                              }}
                            />
                          </Avatar.Group>
                        </Col>
                        <Col style={{ paddingTop: "3px", paddingLeft: "10px" }}>
                          <Typography.Title
                            style={{
                              fontSize: "22px",
                              fontFamily: "Source Serif Pro",
                              color: "rgba(255,255,255,0.94)",
                              fontWeight: "500",
                            }}
                          >
                            Shreya Sadvi
                          </Typography.Title>
                          <Typography.Title
                            style={{
                              fontSize: "12px",
                              fontFamily: "sans-serif",
                              marginTop: "-5px",
                              color: "rgba(254,197,118,0.92)",
                              fontWeight: "600",
                            }}
                          >
                            Product Designer at SlashDiv
                          </Typography.Title>
                        </Col>
                      </Row>
                    </Col>
                    <Col>
                      <div>
                        <i className="fas fa-quote-right"></i>
                      </div>
                    </Col>
                  </Row>
                  <Row style={{ padding: "20px", marginTop: "-30px" }}>
                    <Col>
                      <Typography.Text
                        style={{
                          color: "rgba(255,255,255,0.77)",
                          fontSize: "15px",
                          fontFamily: "Kite One",
                        }}
                      >
                        We are motivated by the satisfaction of our clients.Put
                        your trust in us and share in our growth Asset
                        Management is made up of a team of expert, committed and
                        experienced people with a passion for financial markets.
                        Our goal is to achieve continuous and sustainable growth
                        of our clients.
                      </Typography.Text>
                    </Col>
                  </Row>
                </div>
              </Layout>
            </Col>
            <Col xs={24} md={12} lg={8} style={{ paddingBottom: "30px" }}>
              <Layout style={{ backgroundColor: "#fec576", padding: "1px" }}>
                <div
                  style={{
                    backgroundColor: "#313552",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  <Row
                    justify="space-between"
                    style={{ padding: "20px", fontSize: "30px" }}
                  >
                    <Col>
                      <Row justify="space-between">
                        <Col>
                          <Avatar.Group style={{ marginLeft: "10px" }}>
                            <Avatar
                              shape="circle"
                              size="large"
                              src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjYxfHxiaXNzaW5lc3MlMjBtZW4lMjBwcm9maWxlJTIwcGljc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                              style={{
                                marginLeft: "-10px",
                                width: "50px",
                                borderColor: "#4852b6",
                                background: "#84ce95",
                                height: "50px",
                              }}
                            />
                          </Avatar.Group>
                        </Col>
                        <Col style={{ paddingTop: "3px", paddingLeft: "10px" }}>
                          <Typography.Title
                            style={{
                              fontSize: "22px",
                              fontFamily: "Source Serif Pro",
                              color: "rgba(255,255,255,0.94)",
                              fontWeight: "500",
                            }}
                          >
                            Rihata Jhones
                          </Typography.Title>
                          <Typography.Title
                            style={{
                              fontSize: "12px",
                              fontFamily: "sans-serif",
                              marginTop: "-5px",
                              color: "rgba(254,197,118,0.92)",
                              fontWeight: "600",
                            }}
                          >
                            Product Designer at SlashDiv
                          </Typography.Title>
                        </Col>
                      </Row>
                    </Col>
                    <Col>
                      <div>
                        <i className="fas fa-quote-right"></i>
                      </div>
                    </Col>
                  </Row>
                  <Row style={{ padding: "20px", marginTop: "-30px" }}>
                    <Col>
                      <Typography.Text
                        style={{
                          color: "rgba(255,255,255,0.77)",
                          fontSize: "15px",
                          fontFamily: "Kite One",
                        }}
                      >
                        We are motivated by the satisfaction of our clients.Put
                        your trust in us and share in our growth Asset
                        Management is made up of a team of expert, committed and
                        experienced people with a passion for financial markets.
                        Our goal is to achieve continuous and sustainable growth
                        of our clients.
                      </Typography.Text>
                    </Col>
                  </Row>
                </div>
              </Layout>
            </Col>
            <Col xs={24} md={12} lg={8} style={{ paddingBottom: "30px" }}>
              <Layout style={{ backgroundColor: "#fec576", padding: "1px" }}>
                <div
                  style={{
                    backgroundColor: "#313552",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  <Row
                    justify="space-between"
                    style={{ padding: "20px", fontSize: "30px" }}
                  >
                    <Col>
                      <Row justify="space-between">
                        <Col>
                          <Avatar.Group style={{ marginLeft: "10px" }}>
                            <Avatar
                              shape="circle"
                              size="large"
                              src="https://images.unsplash.com/photo-1543132220-4bf3de6e10ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                              style={{
                                marginLeft: "-10px",
                                width: "50px",
                                borderColor: "#4852b6",
                                background: "#84ce95",
                                height: "50px",
                              }}
                            />
                          </Avatar.Group>
                        </Col>
                        <Col style={{ paddingTop: "3px", paddingLeft: "10px" }}>
                          <Typography.Title
                            style={{
                              fontSize: "22px",
                              fontFamily: "Source Serif Pro",
                              color: "rgba(255,255,255,0.94)",
                              fontWeight: "500",
                            }}
                          >
                            Albert Raster
                          </Typography.Title>
                          <Typography.Title
                            style={{
                              fontSize: "12px",
                              fontFamily: "sans-serif",
                              marginTop: "-5px",
                              color: "rgba(254,197,118,0.92)",
                              fontWeight: "600",
                            }}
                          >
                            Product Designer at SlashDiv
                          </Typography.Title>
                        </Col>
                      </Row>
                    </Col>
                    <Col>
                      <div>
                        <i className="fas fa-quote-right"></i>
                      </div>
                    </Col>
                  </Row>
                  <Row style={{ padding: "20px", marginTop: "-30px" }}>
                    <Col>
                      <Typography.Text
                        style={{
                          color: "rgba(255,255,255,0.77)",
                          fontSize: "15px",
                          fontFamily: "Kite One",
                        }}
                      >
                        We are motivated by the satisfaction of our clients.Put
                        your trust in us and share in our growth Asset
                        Management is made up of a team of expert, committed and
                        experienced people with a passion for financial markets.
                        Our goal is to achieve continuous and sustainable growth
                        of our clients.
                      </Typography.Text>
                    </Col>
                  </Row>
                </div>
              </Layout>
            </Col>
          </Row>
        </div>
      </Layout>
      <Layout
        style={{
          backgroundColor: "#292f44",
          paddingTop: "50px",
          paddingBottom: "50px",
          paddingLeft: "100px",
          paddingRight: "100px",
        }}
      >
        <div>
          <Row>
            <Col xs={7} md={6}>
              <div>
                <Typography.Title
                  style={{
                    color: "#fec576",
                    fontSize: "12px",
                    fontFamily: "sans-serif",
                  }}
                >
                  MY HONORABLE
                </Typography.Title>
                <Typography.Title
                  style={{
                    fontFamily: "Abril Fatface",
                    marginTop: "15px",
                    color: "rgba(255,255,255,0.89)",
                    fontWeight: "400",
                    letterSpacing: "1px",
                    fontSize: "30px",
                  }}
                >
                  Clients
                </Typography.Title>
              </div>
              <div style={{ paddingTop: "30px" }}>
                <Button
                  style={{
                    border: "none",
                    color: "#fec576",
                    background: "none",
                    fontWeight: "600",
                    paddingLeft: "0px",
                    fontSize: "12px",
                    fontFamily: "sans-serif",
                  }}
                >
                  WORLD WIDE
                </Button>
                <CaretRightOutlined
                  style={{ marginLeft: "-5px", color: "#fec576" }}
                />
              </div>
              <div style={{ paddingTop: "10px", paddingBottom: "20px" }}>
                <Button
                  style={{
                    border: "none",
                    color: "rgba(255,255,255,0.89)",
                    background: "none",
                    fontWeight: "600",
                    paddingLeft: "0px",
                    fontSize: "12px",
                    fontFamily: "sans-serif",
                  }}
                >
                  MY COUNTRY
                </Button>
              </div>
            </Col>
            <Col md={18} xs={17}>
              <div>
                <Row gutter={30}>
                  <Col xs={12} md={8}>
                    <div style={{ marginBottom: "30px" }}>
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9vLfSPH8n6XH6FdsNuGf40KPFFyj2YO3VPA&usqp=CAU"
                        style={{ width: "100%", borderRadius: "5px" }}
                      ></img>
                    </div>
                  </Col>
                  <Col xs={12} md={8}>
                    <div style={{ marginBottom: "30px" }}>
                      <img
                        src="https://cdn.worldvectorlogo.com/logos/ama-prom-baltic.svg"
                        style={{ width: "100%", borderRadius: "5px" }}
                      ></img>
                    </div>
                  </Col>
                  <Col xs={12} md={8}>
                    <div style={{ marginBottom: "30px" }}>
                      <img
                        src="https://cdn.worldvectorlogo.com/logos/louisiana-plumbing.svg"
                        style={{ width: "100%", borderRadius: "5px" }}
                      ></img>
                    </div>
                  </Col>
                  <Col xs={12} md={8}>
                    <div style={{ marginBottom: "30px" }}>
                      <img
                        src="https://cdn.worldvectorlogo.com/logos/runa.svg"
                        style={{ width: "100%", borderRadius: "5px" }}
                      ></img>
                    </div>
                  </Col>
                  <Col xs={12} md={8}>
                    <div style={{ marginBottom: "30px" }}>
                      <img
                        src="https://cdn.worldvectorlogo.com/logos/expressjet.svg"
                        style={{ width: "100%", borderRadius: "5px" }}
                      ></img>
                    </div>
                  </Col>
                  <Col xs={12} md={8}>
                    <div style={{ marginBottom: "30px" }}>
                      <img
                        src="https://cdn.worldvectorlogo.com/logos/atreus-systems-61151.svg"
                        style={{ width: "100%", borderRadius: "5px" }}
                      ></img>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </Layout>
      <Layout
        style={{
          backgroundColor: "#22273b",
          paddingTop: "50px",
          paddingBottom: "50px",
          paddingLeft: "100px",
          paddingRight: "100px",
        }}
      >
        <div>
          <Row>
            <Col>
              <div>
                <Typography.Text
                  style={{
                    color: "#fec576",
                    fontSize: "12px",
                    fontFamily: "sans-serif",
                  }}
                >
                  SOCIAL MEDIA
                </Typography.Text>
              </div>
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col>
              <div style={{ paddingTop: "5px" }}>
                <Typography.Text
                  style={{
                    fontSize: "30px",
                    fontFamily: "Abril Fatface",
                    color: "rgba(255,255,255,0.89)",
                    fontWeight: "400",
                    letterSpacing: "1px",
                  }}
                >
                  Let&#039;s Be Friends
                </Typography.Text>
              </div>
            </Col>
          </Row>
        </div>
        <div style={{ paddingTop: "40px" }}>
          <Row
            gutter={30}
            style={{
              fontSize: "20px",
              fontFamily: "Source Serif Pro",
              color: "#db4242",
              fontWeight: "50",
            }}
          >
            <Col xs={24} md={12} lg={8} style={{ paddingBottom: "30px" }}>
              <div>
                <Layout style={{ backgroundColor: "#fec576", padding: "1px" }}>
                  <div style={{ backgroundColor: "#313552", padding: "20px" }}>
                    <Row justify="space-between">
                      <Col>
                        <Typography.Title
                          style={{
                            fontSize: "25px",
                            fontFamily: "Abril Fatface",
                            color: "rgba(255,255,255,0.82)",
                            fontWeight: "100",
                            letterSpacing: "1px",
                          }}
                        >
                          Linkeding
                        </Typography.Title>
                        <Typography.Title
                          style={{
                            fontSize: "12px",
                            fontFamily: "sans-serif",
                            marginTop: "-0px",
                            color: "rgba(254,197,118,0.8)",
                          }}
                        >
                          Professional social profile
                        </Typography.Title>
                      </Col>
                      <Col>
                        <i
                          className="fab fa-linkedin-in"
                          style={{
                            color: "rgba(0,0,0,0.42)",
                            fontSize: "40px",
                            paddingTop: "10px",
                          }}
                        ></i>
                      </Col>
                    </Row>
                  </div>
                </Layout>
              </div>
            </Col>
            <Col xs={24} md={12} lg={8} style={{ paddingBottom: "30px" }}>
              <div>
                <Layout style={{ backgroundColor: "#fec576", padding: "1px" }}>
                  <div style={{ backgroundColor: "#313552", padding: "20px" }}>
                    <Row justify="space-between">
                      <Col>
                        <Typography.Title
                          style={{
                            fontSize: "25px",
                            fontFamily: "Abril Fatface",
                            color: "rgba(255,255,255,0.82)",
                            fontWeight: "100",
                            letterSpacing: "1px",
                          }}
                        >
                          Dribbble
                        </Typography.Title>
                        <Typography.Title
                          style={{
                            fontSize: "12px",
                            fontFamily: "sans-serif",
                            marginTop: "-0px",
                            color: "rgba(254,197,118,0.8)",
                          }}
                        >
                          Design work social profile
                        </Typography.Title>
                      </Col>
                      <Col>
                        <i
                          className="fab fa-dribbble"
                          style={{
                            color: "rgba(0,0,0,0.42)",
                            fontSize: "40px",
                            paddingTop: "10px",
                          }}
                        ></i>
                      </Col>
                    </Row>
                  </div>
                </Layout>
              </div>
            </Col>
            <Col xs={24} md={12} lg={8} style={{ paddingBottom: "30px" }}>
              <div>
                <Layout style={{ backgroundColor: "#fec576", padding: "1px" }}>
                  <div style={{ backgroundColor: "#313552", padding: "20px" }}>
                    <Row justify="space-between">
                      <Col>
                        <Typography.Title
                          style={{
                            fontSize: "25px",
                            fontFamily: "Abril Fatface",
                            color: "rgba(255,255,255,0.82)",
                            fontWeight: "100",
                            letterSpacing: "1px",
                          }}
                        >
                          Instagram
                        </Typography.Title>
                        <Typography.Title
                          style={{
                            fontSize: "12px",
                            fontFamily: "sans-serif",
                            marginTop: "-0px",
                            color: "rgba(254,197,118,0.8)",
                          }}
                        >
                          Social communication
                        </Typography.Title>
                      </Col>
                      <Col>
                        <i
                          className="fab fa-instagram"
                          style={{
                            color: "rgba(0,0,0,0.42)",
                            fontSize: "40px",
                            paddingTop: "10px",
                          }}
                        ></i>
                      </Col>
                    </Row>
                  </div>
                </Layout>
              </div>
            </Col>
            <Col xs={24} md={12} lg={8} style={{ paddingBottom: "30px" }}>
              <div>
                <Layout style={{ backgroundColor: "#fec576", padding: "1px" }}>
                  <div style={{ backgroundColor: "#313552", padding: "20px" }}>
                    <Row justify="space-between">
                      <Col>
                        <Typography.Title
                          style={{
                            fontSize: "25px",
                            fontFamily: "Abril Fatface",
                            color: "rgba(255,255,255,0.82)",
                            fontWeight: "100",
                            letterSpacing: "1px",
                          }}
                        >
                          Twitter
                        </Typography.Title>
                        <Typography.Title
                          style={{
                            fontSize: "12px",
                            fontFamily: "sans-serif",
                            marginTop: "-0px",
                            color: "rgba(254,197,118,0.8)",
                          }}
                        >
                          Random thoughts
                        </Typography.Title>
                      </Col>
                      <Col>
                        <i
                          className="fab fa-twitter"
                          style={{
                            color: "rgba(0,0,0,0.42)",
                            fontSize: "40px",
                            paddingTop: "10px",
                          }}
                        ></i>
                      </Col>
                    </Row>
                  </div>
                </Layout>
              </div>
            </Col>
            <Col xs={24} md={12} lg={8} style={{ paddingBottom: "30px" }}>
              <div>
                <Layout style={{ backgroundColor: "#fec576", padding: "1px" }}>
                  <div style={{ backgroundColor: "#313552", padding: "20px" }}>
                    <Row justify="space-between">
                      <Col>
                        <Typography.Title
                          style={{
                            fontSize: "25px",
                            fontFamily: "Abril Fatface",
                            color: "rgba(255,255,255,0.82)",
                            fontWeight: "100",
                            letterSpacing: "1px",
                          }}
                        >
                          Medium
                        </Typography.Title>
                        <Typography.Title
                          style={{
                            fontSize: "12px",
                            fontFamily: "sans-serif",
                            marginTop: "-0px",
                            color: "rgba(254,197,118,0.8)",
                          }}
                        >
                          Work case study
                        </Typography.Title>
                      </Col>
                      <Col>
                        <i
                          className="fab fa-medium-m"
                          style={{
                            color: "rgba(0,0,0,0.42)",
                            fontSize: "40px",
                            paddingTop: "10px",
                          }}
                        ></i>
                      </Col>
                    </Row>
                  </div>
                </Layout>
              </div>
            </Col>
            <Col xs={24} md={12} lg={8} style={{ paddingBottom: "30px" }}>
              <div>
                <Layout style={{ backgroundColor: "#fec576", padding: "1px" }}>
                  <div style={{ backgroundColor: "#fec576", padding: "20px" }}>
                    <Row justify="space-between">
                      <Col>
                        <Typography.Title
                          style={{
                            fontSize: "25px",
                            fontFamily: "Abril Fatface",
                            color: "rgba(0,0,0,0.86)",
                            fontWeight: "400",
                            letterSpacing: "1px",
                          }}
                        >
                          Email
                        </Typography.Title>
                        <Typography.Title
                          style={{
                            fontSize: "12px",
                            fontFamily: "sans-serif",
                            marginTop: "-0px",
                            color: "rgba(0,0,0,0.86)",
                            fontWeight: "600",
                          }}
                        >
                          hello@slashdiv.tech
                        </Typography.Title>
                      </Col>
                      <Col>
                        <i
                          className="far fa-envelope"
                          style={{
                            color: "rgba(0,0,0,0.42)",
                            fontSize: "40px",
                            paddingTop: "10px",
                          }}
                        ></i>
                      </Col>
                    </Row>
                  </div>
                </Layout>
              </div>
            </Col>
          </Row>
        </div>
      </Layout>
      <Layout
        style={{
          backgroundColor: "#303451",
          paddingTop: "50px",
          paddingBottom: "50px",
          paddingLeft: "100px",
          paddingRight: "100px",
        }}
      >
        <div>
          <Row align="top" justify="space-between">
            <Col>
              <Row>
                <Col>
                  <Avatar
                    src="https://static1.squarespace.com/static/5df9ba9cfb325158acadf8b0/t/5f0301bb6e62565b9d585f91/1603697990249/?format=1500w"
                    style={{ width: "50px", marginTop: "-9px", height: "50px" }}
                  />
                </Col>
                <Col>
                  <Typography.Text
                    style={{
                      fontSize: "20px",
                      fontFamily: "sans-serif",
                      color: "rgba(255,255,255,0.89)",
                      fontWeight: "500",
                      paddingLeft: "3px",
                    }}
                  >
                    SlashDiv
                  </Typography.Text>
                </Col>
              </Row>
            </Col>
            <Col>
              <div>
                <Typography.Title
                  style={{
                    fontSize: "25px",
                    fontFamily: "Abril Fatface",
                    color: "rgba(255,255,255,0.89)",
                    fontWeight: "400",
                    letterSpacing: "1px",
                  }}
                >
                  Let&#039;s Talk?
                </Typography.Title>
              </div>
            </Col>
            <Col>
              <div style={{ textAlign: "center" }}>
                <Button
                  style={{
                    border: "none",
                    paddingTop: "5px",
                    color: "#fec576",
                    fontWeight: "600",
                    paddingLeft: "20px",
                    fontSize: "12px",
                    paddingBottom: "5px",
                    borderColor: "#fec576",
                    borderRadius: "0px",
                    background: "none",
                    fontFamily: "sans-serif",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    height: "auto",
                    paddingRight: "20px",
                  }}
                >
                  LET&#039;S CHAT
                </Button>
              </div>
            </Col>
          </Row>
        </div>
        <div style={{ paddingTop: "20px" }}>
          <Row gutter={50} justify="space-around">
            <Col>
              <div>
                <Button
                  style={{
                    border: "none",
                    fontSize: "12px",
                    fontFamily: "sans-serif",
                    color: "rgba(255,255,255,0.89)",
                    fontWeight: "600",
                    background: "none",
                  }}
                >
                  ABOUT
                </Button>
                <Button
                  style={{
                    border: "none",
                    fontSize: "12px",
                    fontFamily: "sans-serif",
                    color: "#fec576",
                    fontWeight: "600",
                    background: "none",
                  }}
                >
                  WORKS
                </Button>
                <Button
                  style={{
                    border: "none",
                    fontSize: "12px",
                    fontFamily: "sans-serif",
                    color: "rgba(255,255,255,0.89)",
                    fontWeight: "600",
                    background: "none",
                  }}
                >
                  CASESTUDY
                </Button>
                <Button
                  style={{
                    border: "none",
                    fontSize: "12px",
                    fontFamily: "sans-serif",
                    color: "rgba(255,255,255,0.89)",
                    fontWeight: "600",
                    background: "none",
                  }}
                >
                  CLIENTS
                </Button>
                <Button
                  style={{
                    border: "none",
                    fontSize: "12px",
                    fontFamily: "sans-serif",
                    color: "rgba(255,255,255,0.89)",
                    fontWeight: "600",
                    background: "none",
                  }}
                >
                  CONTACT
                </Button>
              </div>
            </Col>
          </Row>
        </div>
        <div style={{ paddingTop: "10px" }}>
          <Row justify="space-around">
            <Col>
              <div>
                <Typography.Title
                  level={4}
                  style={{
                    fontSize: "12px",
                    fontFamily: "sans-serif",
                    color: "rgba(255,255,255,0.89)",
                    fontWeight: "600",
                  }}
                >
                  © 2019 SlashDiv,Techies vr.vardhan, VR 1432
                </Typography.Title>
              </div>
            </Col>
          </Row>
        </div>
      </Layout>
    </div>
  );
}
export default PortfolioAntUI;