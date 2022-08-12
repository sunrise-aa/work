package dto;

    public class MessageDto {
        private String msg;//返回消息
        private boolean isSuccess;//状态

        public MessageDto() {
            super();
        }

        public MessageDto(String msg, boolean isSuccess) {
            this.msg = msg;
            this.isSuccess = isSuccess;
        }

        public String getMsg() {
            return msg;
        }

        public void setMsg(String msg) {
            this.msg = msg;
        }

        public boolean isSuccess() {
            return isSuccess;
        }

        public void setSuccess(boolean success) {
            isSuccess = success;
        }
    }

