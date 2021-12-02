package io.soccerapp.premiersoccerleaguecup.utility;

public class SoccerClubException extends RuntimeException {

private static final long serialVersionUID = 1L;

private String errCode;
private String errMsg;
private String description;

public SoccerClubException() {
super();
// TODO Auto-generated constructor stub
}

public SoccerClubException(String errCode, String errMsg, String description) {
super(errMsg);
this.errCode = errCode;
this.errMsg = errMsg;
this.description = description;
}

public SoccerClubException(String errCode) {
super(errCode);
this.errCode = errCode;
}

public SoccerClubException(String errCode, String errMsg) {
super(errMsg);
this.errCode = errCode;
this.errMsg = errMsg;
}

public String getErrCode() {
return errCode;
}

public void setErrCode(String errCode) {
this.errCode = errCode;
}

public String getErrMsg() {
return errMsg;
}

public void setErrMsg(String errMsg) {
this.errMsg = errMsg;
}

public String getDescription() {
return description;
}

public void setDescription(String description) {
this.description = description;
}

@Override
public String toString() {
return "SoccerClubExpection [errCode=" + errCode + ", errMsg=" + errMsg + ", description=" + description + "]";
}

}


