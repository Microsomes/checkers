<style scoped>

  @import url("https://fonts.googleapis.com/css?family=ZCOOL+QingKe+HuangYou");
  @import url("https://fonts.googleapis.com/css?family=Roboto");

  .main_text{
    font-family: 'ZCOOL QingKe HuangYou', cursive;

  }
  .sub_text{
    text-align: center;
    color:grey;
    font-family: 'Roboto', sans-serif;
  }

  .flexi{
    display:flex;
    align-items: center;
    justify-content: center;
   }

  #checkers{
    border:1px solid grey;
    height:220px;
    width: 220px;
     background-image: url("https://firebasestorage.googleapis.com/v0/b/smallchain-557b8.appspot.com/o/220px-Font_Awesome_5_solid_chess-board.svg.png?alt=media&token=4274548a-428b-4cc8-b7e6-2361b53156f9");
    background-repeat:no-repeat;
 
    transform: scale(2);
      

  }

  .marked{
    border:1px solid yellow;
  }

</style>

<template>

  <div class="home">
 
    

      <div style="height:800px;position:relative" class="flexi">
          <div style="position:absolute;top:50px;min-height:100px;width:1000px;">
            
            <h3 class="card main_text" style="text-align:center;padding:10px;">Suleman VS The Monopoly King Tayyab</h3>
            <p class="sub_text">Sule avoided a checkers game with me for so long citing automatic moves so here we go. Lets play (:</p>
          </div>
       <div id="checkers">
        
        <!--this is the row-->
         <div v-for="(n,i) in pos" :key="i" style="border:1px solid white;height:27.3px;color:red;display:flex;">
             <div :class="{marked:a.isMarked}"  @click="mark_it(i,iy)" :style="{background:a.background}" v-for="(a,iy) in n" :key="iy" style="height:27px;width:27px;text-align:center;display:flex;align-items:center;justify-content:center;">
              
               <img    :src="a.icon" style="width:80%;"/>
             </div>
          </div>
         <!--row ends-->
         

       </div>
      </div>

      <p style="position:absolute;top:100px;left:20px;font-size:40px;transform:rotate(130deg)">Rekt</p>
      <p style="position:absolute;top:100px;left:20px;top:40px;font-size:40px;transform:rotate(130deg)">Rekt</p>
      <p style="position:absolute;top:100px;left:100px;font-size:40px;transform:rotate(130deg)">Rekt</p>
      <p style="position:absolute;top:100px;left:50px;font-size:40px;transform:rotate(130deg)">Rekt</p>
      <p style="position:absolute;top:100px;left:90px;font-size:40px;transform:rotate(130deg)">Rekt</p>
      <p style="position:absolute;top:300px;left:20px;font-size:40px;transform:rotate(130deg)">Rekt</p>
      <p style="position:absolute;top:300px;left:100px;font-size:40px;transform:rotate(230deg)">Rekt</p>
      <p style="position:absolute;top:300px;left:50px;font-size:40px;transform:rotate(230deg)">Rekt</p>
      <p style="position:absolute;top:300px;left:90px;font-size:40px;transform:rotate(230deg)">Rekt</p>
      <p style="position:absolute;top:300px;left:20px;font-size:40px;transform:rotate(230deg)">Rekt</p>
      <p style="position:absolute;top:400px;margin-left:20px;font-size:30px">Rekt you done fuk*ed up</p>
      <p style="position:absolute; margin-left:20px;font-size:30px;margin-top:40px;top:400px;" class="main_text">The beginning of the end</p>


      <div style="position:absolute; margin-left:20px;font-size:30px;margin-top:40px;top:200px;right:200px;border:1px solid black;height:300px;width:350px;" >
          <p  class="main_text" style="text-align:center;">Turn</p>
          <p style="text-align:center;" v-if="turn==1">Players (black) Player 1 turn</p>
          <p style="text-align:center;" v-if="turn==2">Players (White) Player 2 turn</p>
      </div>
    
  </div>
</template>

 

<script>
// @ is an alias to /src

/*

  @author Tayyab Javed
  @date 27/02/2019

  --this is the checkers game i created insprired by the waves community competition in addition to my friend making escuses about not playing checkers with me citing automatic moves thus this game will not give hints if their is a checker you need to take out


*/

function isOddD(num){
   function isOdd(num) { return num % 2;}

  if(isOdd(num)===1){
    return true;
  }else{
    return false;
  }
}
 
export default {
  name: 'home',
  data:function(){
    return {
      turn:1,//whos turn is it
      pos:[

      ]
    }
  },
  created(){
    this.pos=[];
    var rows=8;


    let deepend=0;

    for(let i=0;i<rows;i++){
          
          let toAdd=[];
          
          var playerOneCol="white";
          //determines player one color
          var player_one_img;
          player_one_img="https://firebasestorage.googleapis.com/v0/b/smallchain-557b8.appspot.com/o/tayyabsdice.png?alt=media&token=d106a692-d5fc-4323-8305-7a51a460982d";
          var playerTwoCol="black";
          //determines player two color
          var player_two_img="https://firebasestorage.googleapis.com/v0/b/smallchain-557b8.appspot.com/o/sss.png?alt=media&token=e42182cf-5ded-44d5-b957-5ecf1d25c531";

             

       for(let a=0;a<8;a++){
            

          if(deepend==0){
            if(isOddD(a)){
                toAdd.push({val:a,background:playerOneCol,player:-1,isking:false});                             
                
            }else{            
                  toAdd.push({val:a,background:playerTwoCol,player:2,isking:false,icon:player_two_img,isMarked:false});
            }
          }else if(deepend==1){
               if(isOddD(a+1)){
                toAdd.push({val:a,background:playerOneCol,player:-1,isking:false,});
            }else{
                  toAdd.push({val:a,background:playerTwoCol,player:2,isking:false,icon:player_two_img,isMarked:false});
            }
          }else if(deepend==2){
              if(isOddD(a+2)){
                toAdd.push({val:a,background:playerOneCol,player:-1,isking:false});
            }else{
                  toAdd.push({val:a,background:playerTwoCol,player:2,isking:false,icon:player_two_img,isMarked:false});
            }
          }
          /////////////////////////////middle
          else if(deepend==3){
              if(isOddD(a+3)){
                toAdd.push({val:a,background:playerOneCol,player:-1,isking:false});
            }else{
                  toAdd.push({val:a,background:playerTwoCol,player:0,isking:false,isMarked:false});
            }
          }else if(deepend==4){
              if(isOddD(a+4)){
                toAdd.push({val:a,background:playerOneCol,player:-1,isking:false});
            }else{
                  toAdd.push({val:a,background:playerTwoCol,player:0,isking:false,isMarked:false});
            }
          }
          //////////////////////////middle
          else if(deepend==5){
              if(isOddD(a+5)){
                toAdd.push({val:a,background:playerOneCol,player:-1,isking:false});
            }else{
                  toAdd.push({val:a,background:playerTwoCol,player:1,isking:false,icon:player_one_img,isMarked:false});
            }
          }
          else if(deepend==6){
              if(isOddD(a+6)){
                toAdd.push({val:a,background:playerOneCol,player:-1,isking:false});
            }else{
                  toAdd.push({val:a,background:playerTwoCol,player:1,isking:false,icon:player_one_img,isMarked:false});
            }
          }
          
          else if(deepend==7){
              if(isOddD(a+7)){
                toAdd.push({val:a,background:playerOneCol,player:-1,isking:false});
            }else{
                  toAdd.push({val:a,background:playerTwoCol,player:1,isking:false,icon:player_one_img,isMarked:false});
            }
          }
          
          
         
         if(a==7){
          this.pos.push(toAdd);
          deepend++;
        }
      }
    }


  },
  methods:{
    clearAllMarkings(){
      for(var i=0;i<this.pos.length;i++){
        let cur=this.pos[i];

        for(let a=0;a<cur.length;a++){
           let curr=cur[a];
           if(curr.player==-1){
             //ignore since this cant be marked anyway its an invalid path
           }else{
              curr.isMarked=false;
           }
        }
         
      }
    },
    highlightAllPotentialMoves(pointer,parent,sub_index){
      //highlights all potential moves  
      console.log(pointer);

      var parent=parent;
      console.log("parent:",parent);

      if(this.turn==1){
        //turn one
        console.log("moving forward");

        let potentialRow=this.pos[parent-1];
        //scan potential row to see if the their are any enemies on it

        for(let i=0;i<potentialRow.length;i++){
          let cur= potentialRow[i];
          console.log(cur.player)
          if(cur.player==-1){
            console.log("ignore invalid cell");
          }else if(cur.player==0){
            //empty legal plaaces
            console.log("legal");

            this.pos[parent-1][i].isMarked=true;
            

          }else if(cur.player==2){
            //the enemy is positioned on this row 
            //annalyse if we can attack them here
          }
        }
      


      }else{
        //turn two
        console.log("moving back");
      }

      console.log(parent,sub_index);

    },
    mark_cell(parent,sub_index){
       let pointer=this.pos[parent][sub_index];
      //check if this is a good place to mark
          this.clearAllMarkings();
      if(pointer.player!=-1 && pointer.player!=0){
            //check whos turn it is 
            if(pointer.player==this.turn){
                 this.pos[parent][sub_index].isMarked=true;
                this.highlightAllPotentialMoves(pointer,parent,sub_index);
            }else{
              //attempting to select other opponnents cell so will be ignored
            }
 
      }
      },
    mark_it(parent,subindex){
      //mark
      this.mark_cell(parent,subindex);
       
 
    }
  },
  components: {

   }
}
</script>
