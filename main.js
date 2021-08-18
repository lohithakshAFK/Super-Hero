var canvas = new fabric.Canvas("myCanvas");
player_object = "";

img_height = 30;
img_width = 30;

player_x = 500;
player_y = 300;

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
    block_img_object = Img;
    block_img_object.scaleToWidth(img_width);
    block_img_object.scaleToHeight(img_height);
    block_img_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(block_img_object);
    });
    };
    function player_update(){
        fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y, 
            left:player_x
        });
        canvas.add(player_object);
    });
    };

    window.addEventListener("keydown", mykeydown);

    function mykeydown(e){
        keyPressed = e.keyCode;
        if(e.shiftKey == true && keyPressed == "80"){
            console.log("Shift and p are pressed together");
            img_width = img_width + 10;
            img_height = img_height + 10;
            document.getElementById("current_width").innerHTML = img_width;
            document.getElementById("current_height").innerHTML = img_height;
        }
        if(e.shiftKey == true && keyPressed == "77"){
            console.log("Shift and m are pressed together");
            img_width = img_width - 10;
            img_height = img_height - 10;
            document.getElementById("current_width").innerHTML = img_width;
            document.getElementById("current_height").innerHTML = img_height;
        }
        if(keyPressed == "70"){
            console.log("f key is pressed");
            new_image("ironman_face.png");
        }
        if(keyPressed == "66"){
            console.log("b key is pressed");
            new_image("hulkd_body.png");
        }
        if(keyPressed == "82"){
            console.log("r key is pressed");
            new_image("thor_right_hand.png");
        }
        if(keyPressed == "72"){
            console.log("h key is pressed");
            new_image("spiderman_left_hand.png");
        }
        if(keyPressed == "76"){
            console.log("l key is pressed");
            new_image("ironman_legs.png");
        }
        if(keyPressed == "38"){
            console.log("up");
            up();
        }
        if(keyPressed == "40"){
            console.log("down");
            down();
        }
        if(keyPressed == "37"){
            console.log("left");
            left();
        }
        if(keyPressed == "39"){
            console.log("right");
            right();
        }
    };

    function up(){
        if(player_y >= 0){
            player_y = player_y - img_height;
            console.log("block img height = " + img_height);
            console.log("when up pressed x = "+player_x+",y = " +player_y);
            canvas.remove(player_object);
            player_update();
        };
    };

     function down(){
         if(player_y <= 500){
            player_y = player_y + img_height;
        console.log("block img height = " + img_height);
        console.log("when up pressed x = " + player_x + ",y = " + player_y);
        canvas.remove(player_object);
        player_update();
    };
};

    function left(){
        if(player_x >= 300){
            player_x = player_x - img_width;
            console.log("block img width = " + img_width);
            console.log("when up pressed x = " + player_x + ",y = " + player_y);
            canvas.remove(player_object);
            player_update();
        };
    };

    function right(){
        if(player_x <= 850){
            player_x = player_x + img_width;
            console.log("block img width = " + img_width);
            console.log("when up pressed x = " + player_x + ",y = " + player_y);
            canvas.remove(player_object);
            player_update();
        };
    };