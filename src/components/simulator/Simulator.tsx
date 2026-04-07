import { useState } from "react"
import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"
import { SimulatorOutput } from "./SimulatorOutput"
import { UpgradePrompt } from "../upgrade/UpgradePrompt"

export function Simulator() {
  const [messages, setMessages] = useState([])
  const [analysis, setAnalysis] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [showUpgradeModal, setShowUpgradeModal] = useState(false)

  const handleSimulate = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/simulate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages })
      })
      
      if (response.status === 402) {
        // Free tier limit reached
        setShowUpgradeModal(true)
        return
      }

      const data = await response.json()
      setAnalysis(data)
    } catch (error) {
      console.error('Simulation failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <Textarea
          placeholder="Enter your conversation..."
          value={messages.join('\n')}
          onChange={(e) => setMessages(e.target.value.split('\n'))}
          className="min-h-[200px]"
        />
        <Button 
          onClick={handleSimulate}
          disabled={isLoading}
        >
          {isLoading ? 'Analyzing...' : 'Simulate Response'}
        </Button>
      </div>
      
      {analysis && (
        <SimulatorOutput analysis={analysis} />
      )}
      
      {showUpgradeModal && (
        <UpgradePrompt />
      )}
    </div>
  )
}
