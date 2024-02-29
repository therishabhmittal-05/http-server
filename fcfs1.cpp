#include <iostream>
using namespace std;

int main() {
    cout<<"enter the no of processes that you need to execute:";
    int n=4;
   
    int bt[4];//burst time
    cout<<"enter the burst time for the processes";
    for(int i=0;i<n;i++){
        cin>>bt[i];
    }
    int wt[4];
    for(int i=0;i<n;i++){
        if(i==0){
            wt[0]=0;
        }
        else{
            wt[i]=bt[i-1]+wt[i-1];
        }
    }
    int tat[4];
    for(int i=0;i<n;i++){
        tat[i]=wt[i]+bt[i];
    }
    int total_wt=0;
    int total_tat=0;
    for(int i=0;i<n;i++){
        total_wt+=wt[i];
        total_tat+=tat[i];
    }
    float avg_wt=total_wt/n;
    float avg_tat=total_tat/n;
    
    cout<<"avg waiting time is:"<<avg_wt<<endl;
    cout<<"avg turnAroundTime is:"<<avg_tat<<endl;
    
    
    
    
    

    return 0;
}